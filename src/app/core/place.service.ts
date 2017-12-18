import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Place } from './place';

@Injectable()
export class PlaceService {

  constructor(private httpClient: HttpClient) { }

  getPlaceById(id: string): Place {
    let place = new Place();
    this.httpClient.get('../../assets/mockupdata/places.json')
      .subscribe((res: any) => {
        for (let i = 0; i < res.places.length; i++) {
          if (res.places[i].id === id) {
            place.id = res.places[i].id;
            place.desc = res.places[i].desc;
            place.name = res.places[i].name;
          }
        }
      });
    return place;
  }

  getPlaceList(): Array<Place> {
    let places: Array<Place> = [];
    this.httpClient.get('../../assets/mockupdata/places.json')
      .subscribe((res: any) => {
        for (let i = 0; i < res.places.length; i++) {
          let place = new Place();
          place.id = res.places[ i ].id;
          place.desc = res.places[ i ].desc;
          place.name = res.places[ i ].name;
          places[i] = place;
        }
      });
    return places;
  }

}
