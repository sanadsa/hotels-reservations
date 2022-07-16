import { Component, OnInit } from '@angular/core';
import { APIService, Hotel } from 'src/app/API.service';
import { MatDialog } from '@angular/material/dialog';
import { AddHotelComponent } from '../add-hotel/add-hotel.component';
import { v4 as uuid } from 'uuid';
import { HotelService } from '../services/hotel.service';
import { HotelDialogComponent } from '../hotel-dialog/hotel-dialog.component';
import { DashboardDialogComponent } from '../dashboard-dialog/dashboard-dialog.component';

@Component({
  selector: 'app-hotels-layout',
  templateUrl: './hotels-layout.component.html',
  styleUrls: ['./hotels-layout.component.scss']
})
export class HotelsLayoutComponent implements OnInit {

  constructor(private api: APIService, public hotelService: HotelService, public dialog: MatDialog) {
  }

  async ngOnInit() {
    this.hotelService.getHotels();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddHotelComponent, { height: '360px', width: '600px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const hotel: Hotel = {
          id: uuid(),
          name: result.name,
          address: result.address,
          image: result.image
        }
        this.onCreate(hotel);
      }
    });
  }

  openDashboard() {
    const dialogRef = this.dialog.open(DashboardDialogComponent, { height: '360px', width: '600px' });
  }

  openHotel(hotel: Hotel) {
    this.dialog.open(HotelDialogComponent, { width: '750px', height: '530px', data: { hotel: hotel } });
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (!value) { // when nothing has typed
      this.hotelService.assignCopy();
    }
    this.hotelService.searchedHotels = this.hotelService.hotels.filter(
      item => item.name.toLowerCase().indexOf(value.trim().toLowerCase()) > -1
    )
  }

  getUrl(hotelImage: any) {
    return `url(${hotelImage}) no-repeat center center / contain`;
  }

  public onCreate(hotel: Hotel) {
    this.api
      .CreateHotel(hotel)
      .then((event) => {
        this.hotelService.searchedHotels.push(hotel);
      })
      .catch((e) => {
        console.log('error creating hotel...', e);
      });
  }
}
