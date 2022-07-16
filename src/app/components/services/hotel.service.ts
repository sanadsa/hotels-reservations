import { Injectable } from '@angular/core';
import { APIService, Hotel } from 'src/app/API.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public hotels: Array<Hotel> = [];
  public searchedHotels: Array<Hotel> = [];

  constructor(private api: APIService) { }

  assignCopy() {
    this.searchedHotels = Object.assign([], this.hotels);
  }

  getHotels() {
    this.api.ListHotels().then((event) => {
      this.hotels = event.items as unknown as Hotel[];
      this.assignCopy();
    });
  }
}
