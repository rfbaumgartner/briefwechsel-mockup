import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../../core/letter';

@Component({
  selector: 'app-letter-list',
  templateUrl: './letter-list.component.html',
  styleUrls: ['./letter-list.component.css']
})
export class LetterListComponent implements OnInit {

  @Input() letters: Array<Letter>;
  constructor() { }

  ngOnInit() {
  }

}
