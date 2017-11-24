import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index-place-entry',
  templateUrl: './index-place-entry.component.html',
  styleUrls: ['./index-place-entry.component.css']
})
export class IndexPlaceEntryComponent implements OnInit {

  placeId: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.placeId = params['placeId'];
    });
  }

}
