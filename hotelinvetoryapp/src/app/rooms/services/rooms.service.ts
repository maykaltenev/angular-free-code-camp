import { APP_SERVICE_CONFIG } from './../../AppConfig/appconfig.service';
import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log(this.config.apiEndpoint);
    console.log('Rooms service Initialized');
  }
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
  getRooms(): Observable<RoomList[]> {
    return this.http.get<RoomList[]>('/api/rooms');
  }
}
