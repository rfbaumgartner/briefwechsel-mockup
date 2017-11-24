import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../../core/person.service';
import { Person } from '../../core/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() personId: any;
  person: Person;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    if (this.personId) {
      this.person = this.personService.getPersonById(this.personId);
    }
  }

}
