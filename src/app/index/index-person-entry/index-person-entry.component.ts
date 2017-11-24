import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index-person-entry',
  templateUrl: './index-person-entry.component.html',
  styleUrls: ['./index-person-entry.component.css']
})
export class IndexPersonEntryComponent implements OnInit {

  personId: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.personId = params[ 'personId' ];
    });
  }

}
