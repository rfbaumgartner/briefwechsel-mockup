import { Injectable } from '@angular/core';
import { Place } from './place';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PlaceService {

  constructor(private http: Http) { }

  getPlaceById(id: string): Place {
    let place = new Place();
    this.http.get('../../assets/mockupdata/places.json')
      .map(response => response.json())
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
    this.http.get('../../assets/mockupdata/places.json')
      .map(response => response.json())
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
