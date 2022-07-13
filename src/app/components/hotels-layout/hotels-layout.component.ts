import { Component, OnInit } from '@angular/core';
import { APIService, Hotel } from 'src/app/API.service';
import { MatDialog } from '@angular/material/dialog';
import { AddHotelComponent } from '../add-hotel/add-hotel.component';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-hotels-layout',
  templateUrl: './hotels-layout.component.html',
  styleUrls: ['./hotels-layout.component.scss']
})
export class HotelsLayoutComponent implements OnInit {
  public hotels: Array<Hotel> = [];
  public searchedHotels: Array<Hotel> = [];

  constructor(private api: APIService, public dialog: MatDialog) {
  }

  async ngOnInit() {
    this.api.ListHotels().then((event) => {
      this.hotels = event.items as Hotel[];
      this.assignCopy();
    });
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

  assignCopy() {
    this.searchedHotels = Object.assign([], this.hotels);
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (!value) {
      this.assignCopy();
    } // when nothing has typed
    this.searchedHotels = this.hotels.filter(
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
        this.searchedHotels.push(hotel);
      })
      .catch((e) => {
        console.log('error creating hotel...', e);
      });
  }
}
