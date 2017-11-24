import { Injectable } from '@angular/core';
import { Person } from './person';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }

  getPersonById(id: string): Person {
    let person = new Person();
    this.http.get('../../assets/mockupdata/people.json')
      .map(response => response.json())
      .subscribe((res: any) => {
        for (let i = 0; i < res.people.length; i++) {
          if (res.people[i].id === id) {
            person.id = res.people[i].id;
            person.lived = res.people[i].lived;
            person.name = res.people[i].name;
          }
        }
      });
    return person;
  }

  getPersonList(): Array<Person> {
    let people: Array<Person> = [];
    this.http.get('../../assets/mockupdata/people.json')
      .map(response => response.json())
      .subscribe((res: any) => {
        for (let i = 0; i < res.people.length; i++) {
          let person = new Person();
          person.id = res.people[ i ].id;
          person.lived = res.people[ i ].lived;
          person.name = res.people[ i ].name;
          people[i] = person;
        }
      });
    return people;
  }

}
