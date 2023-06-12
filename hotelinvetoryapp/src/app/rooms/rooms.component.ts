import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'My hotel';
  numberOfRooms = 10;
  hideRooms = false;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
