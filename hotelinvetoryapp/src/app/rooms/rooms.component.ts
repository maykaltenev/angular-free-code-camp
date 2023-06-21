import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  selectedRoom!: RoomList;
  hotelName = 'My hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 120,
    bookedRooms: 5,
  };
  title = 'roomList';
  roomList: RoomList[] = [];
  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner',
        price: 500,
        photos:
          'https://tse4.mm.bing.net/th?id=OIP.t-SKlKn52jfSnq-cUiAGQgHaFy&pid=Api',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 4.5,
      },
      {
        roomNumber: 2,
        roomType: 'Nice Room',
        amenities: 'Air Conditioner',
        price: 5200,
        photos:
          'https://tse4.mm.bing.net/th?id=OIP.t-SKlKn52jfSnq-cUiAGQgHaFy&pid=Api',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 4.5,
      },
      {
        roomNumber: 3,
        roomType: 'Private Room',
        amenities: 'Air Conditioner',
        price: 1500,
        photos:
          'https://tse4.mm.bing.net/th?id=OIP.t-SKlKn52jfSnq-cUiAGQgHaFy&pid=Api',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 4.5,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner',
      price: 500,
      photos:
        'https://tse4.mm.bing.net/th?id=OIP.t-SKlKn52jfSnq-cUiAGQgHaFy&pid=Api',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      rating: 4.5,
    };
    // this.roomList.push(room);

    this.roomList = [...this.roomList, room];
  }
}
