import { Component, Input, OnInit } from '@angular/core';
import { APIService, Hotel } from 'src/app/API.service';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {
  @Input() hotel: Hotel;

  constructor(private api: APIService, public hotelService: HotelService) { }

  ngOnInit(): void {
  }

  deleteHotel() {
    this.api.DeleteHotel({ id: this.hotel.id }).then(e => {
      this.hotelService.getHotels();
    }).catch(err => console.log(err));
  }

}
