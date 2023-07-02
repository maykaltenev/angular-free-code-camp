import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor() {}
  roomList: RoomList[] = [
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
  getRooms() {
    return this.roomList;
  }
}
