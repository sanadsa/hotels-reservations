import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { APIService } from 'src/app/API.service';

@Component({
  selector: 'app-dashboard-dialog',
  templateUrl: './dashboard-dialog.component.html',
  styleUrls: ['./dashboard-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardDialogComponent implements OnInit {
  reservationsWithDay: any;
  reservationsByDay: {
    day: string;
    numberOfReservations: number;
  }[] = [];

  constructor(public api: APIService) {
  }

  ngOnInit(): void {
    this.api.ListReservations().then(res => {
      this.reservationsWithDay = res.items.map((r: any) => {
        r.createdAt = (new Date(r.createdAt)).setHours(0, 0, 0, 0);
        return r;
      });

      this.reservationsWithDay.forEach(reservation => {
        const currentReservation = this.reservationsByDay.find(r => r.day === reservation.createdAt);
        if (currentReservation) {
          const index = this.reservationsByDay.indexOf(currentReservation);
          this.reservationsByDay[index].numberOfReservations++;
        } else {
          this.reservationsByDay.push({
            day: reservation.createdAt,
            numberOfReservations: 1
          })
        }
      });
    })
  }

}
