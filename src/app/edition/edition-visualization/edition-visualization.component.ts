import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../../core/letter';

@Component({
  selector: 'app-edition-visualization',
  templateUrl: './edition-visualization.component.html',
  styleUrls: ['./edition-visualization.component.css']
})
export class EditionVisualizationComponent implements OnInit {

  @Input() letters: Array<Letter>;

  constructor() { }

  ngOnInit() {
  }

}
