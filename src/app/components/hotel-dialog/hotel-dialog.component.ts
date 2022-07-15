import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService, Hotel, ListReservationsQuery, ListRoomtTypesQuery, Reservation, RoomtType } from 'src/app/API.service';
import { v4 as uuid } from 'uuid';
import { MatTableDataSource } from '@angular/material/table';

export interface DialogData {
  hotel: Hotel;
}

@Component({
  selector: 'app-hotel-dialog',
  templateUrl: './hotel-dialog.component.html',
  styleUrls: ['./hotel-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HotelDialogComponent implements OnInit {
  roomTypes: string[] = [
    'Single Room',
    'Double Room',
    'Family Connection Room',
    'Deluxe Room'
  ];
  dataSource: any = [];
  displayedColumns: string[] = ['clientName', 'roomType', 'from', 'to'];
  hotel: Hotel = this.data.hotel;
  selectedType: string;
  selectedRoomsCount: number;
  hotelRooms: ListRoomtTypesQuery;
  today = new Date();
  month = this.today.getMonth();
  year = this.today.getFullYear();
  reservationForm: FormGroup;
  roomsForReservation: RoomtType[] = [];
  reservations: ListReservationsQuery;
  todayDate: Date = new Date();
  error: string = '';
  text: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public fb: FormBuilder, private api: APIService) {
    api.ListRoomtTypes({ hotelRoomTypesId: { contains: this.hotel.id } }).then(res => {
      this.hotelRooms = res;
      this.hotelRooms.items.forEach(room => {
        if (room?.count !== undefined && room?.count > 0) {
          this.roomsForReservation.push(room);
        }
      });
    });
    this.api.ListReservations({ reservationHotelId: { contains: this.hotel.id } }).then(res => {
      this.reservations = res;
      this.dataSource = new MatTableDataSource(this.reservations.items);
    });
  }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      clientName: ['', [Validators.required]],
      roomType: [null, [Validators.required]],
      fromDate: [null, [Validators.required]],
      toDate: [null, [Validators.required]]
    });
  }

  addRoomType() {
    this.api.CreateRoomtType({
      id: uuid(),
      type: this.selectedType,
      count: this.selectedRoomsCount,
      hotelRoomTypesId: this.hotel.id
    }).then(res => {
      this.hotelRooms.items.push(res);
      this.roomsForReservation.push(res);
    }).catch(err => console.log(err));
  }

  isAddDisabled() {
    return this.selectedType === undefined || this.selectedRoomsCount === undefined
      || this.selectedType === null || this.selectedRoomsCount === null
      || this.selectedType === '' || this.selectedRoomsCount.toString() === '';
  }

  checkIfReservationValid() {
    const oldReservation = this.reservations.items.find(r => r?.clientName === this.reservationForm.value.clientName);

    if (oldReservation) {
      if ((new Date(this.reservationForm.value.fromDate) > new Date(oldReservation.fromDate)
        && new Date(this.reservationForm.value.fromDate) < new Date(oldReservation.toDate)) ||
        (new Date(this.reservationForm.value.toDate) < new Date(oldReservation.toDate)
          && new Date(this.reservationForm.value.toDate) > new Date(oldReservation.fromDate))) {
        this.error = `A client can't book two rooms on the same date. Please choose a different dates`;
        return false;
      } else {
        this.error = '';
        return true;
      }
    }

    return true;
  }

  addReservation() {
    if (this.checkIfReservationValid()) {
      const roomTypeId = this.reservationForm.value.roomType.id;
      this.api.CreateReservation({
        id: uuid(),
        clientName: this.reservationForm.value.clientName,
        fromDate: this.reservationForm.value.fromDate,
        toDate: this.reservationForm.value.toDate,
        reservationHotelId: this.hotel.id,
        reservationRoomTypeId: roomTypeId
      }).then(res => {
        this.text = 'Booked sucessfully for client ' + this.reservationForm.value.clientName;
        setTimeout(() => {
          this.text = '';
        }, 4000);
        this.reservations.items.push(res);
        this.dataSource = new MatTableDataSource(this.reservations.items);
        this.api.GetRoomtType(roomTypeId).then(res => {
          this.api.UpdateRoomtType({
            id: this.reservationForm.value.roomType.id,
            count: res.count - 1
          }).then(() => {
            const index = this.hotelRooms.items.findIndex(r => r?.id === roomTypeId);
            this.hotelRooms.items[index]!.count = res.count - 1;
          })
        });
      }).catch(err => console.log(err));
    }
  }

  isTypeDisabled(type: string) {
    const roomType = this.hotelRooms?.items.find(r => r?.type === type);
    return roomType ? true : false;
  }

}
