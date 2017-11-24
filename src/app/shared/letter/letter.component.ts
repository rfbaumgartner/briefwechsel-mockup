import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../../core/letter';
import { LetterService } from '../../core/letter.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit {

  @Input() letterId: any;
  letter: Letter;

  constructor(private letterService: LetterService) {}

  ngOnInit() {
    if (this.letterId) {
      this.letter = this.letterService.getLetterById(this.letterId);
    }
  }
}
