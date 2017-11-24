import { Component, Input, OnInit } from '@angular/core';
import { PlaceService } from '../../core/place.service';
import { Place } from '../../core/place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  @Input() placeId: any;
  place: Place;

  constructor(private placeService: PlaceService) {}

  ngOnInit() {
    if (this.placeId) {
      this.place = this.placeService.getPlaceById(this.placeId);
    }
  }
}
