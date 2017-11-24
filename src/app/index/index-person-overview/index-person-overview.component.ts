import { Component, OnInit } from '@angular/core';
import { Person } from '../../core/person';
import { PersonService } from '../../core/person.service';

@Component({
  selector: 'app-index-person-overview',
  templateUrl: './index-person-overview.component.html',
  styleUrls: ['./index-person-overview.component.css']
})
export class IndexPersonOverviewComponent implements OnInit {

  people: Array<Person>;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.people = this.personService.getPersonList();
  }

}
