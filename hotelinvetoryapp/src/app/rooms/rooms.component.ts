import {
  Component,
  DoCheck,
  OnInit,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
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
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;
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
  ngDoCheck(): void {
    console.log('on changes is called');
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = 'Room View';

    this.headerChildrenComponent.last.title = 'Last Title';
  }
  ngAfterViewChecked() {}
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
