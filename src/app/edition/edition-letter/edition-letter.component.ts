import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edition-letter',
  templateUrl: './edition-letter.component.html',
  styleUrls: ['./edition-letter.component.css']
})
export class EditionLetterComponent implements OnInit {

  letterId: string;

  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.letterId = params[ 'letter' ];
    });
  }
}
