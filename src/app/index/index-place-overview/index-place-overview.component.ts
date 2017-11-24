import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../core/place.service';
import { Place } from '../../core/place';

@Component({
  selector: 'app-index-place-overview',
  templateUrl: './index-place-overview.component.html',
  styleUrls: ['./index-place-overview.component.css']
})
export class IndexPlaceOverviewComponent implements OnInit {

  places: Array<Place>;

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.places = this.placeService.getPlaceList();
  }

}
