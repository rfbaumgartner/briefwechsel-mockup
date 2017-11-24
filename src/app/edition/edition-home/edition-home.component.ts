import { Component, OnInit } from '@angular/core';
import { Letter } from '../../core/letter';
import { Person } from '../../core/person';
import { Place } from '../../core/place';
import { ActivatedRoute, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { PlaceService } from '../../core/place.service';
import { PersonService } from '../../core/person.service';
import { LetterService } from '../../core/letter.service';

@Component({
  selector: 'app-edition-home',
  templateUrl: './edition-home.component.html',
  styleUrls: ['./edition-home.component.css']
})
export class EditionHomeComponent implements OnInit {

  showProgressBar = false;
  sub: any;
  selectedPeopleIds: Array<String>;
  selectedPlaceIds: Array<String>;

  letters: Array<Letter>;
  people: Array<Person>;
  places: Array<Place>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private letterService: LetterService,
    private personService: PersonService,
    private placeService: PlaceService ) {

    this.sub = this.route.queryParams.subscribe(params => {
      let queryPeople = params['pers'] || [];
      let queryPlaces = params['ort'] || [];
      this.selectedPeopleIds = [].concat(queryPeople);
      this.selectedPlaceIds = [].concat(queryPlaces);
    });

    this.router.events.subscribe( event => {
      if (event instanceof NavigationStart) {
        this.showProgressBar = true;

      }
      if (event instanceof NavigationEnd) {
        this.showProgressBar = false;
        let selections: Map<string, Array<String>> = new Map([
          ['ort', this.selectedPlaceIds],
          ['pers', this.selectedPeopleIds]
        ]);
        this.letters = this.letterService.searchLetters(selections);
      }
      if (event instanceof NavigationError) {
        console.log('oh noes');
      }
    });
  }

  ngOnInit() {
    this.people = this.personService.getPersonList();
    this.places = this.placeService.getPlaceList();
  }
}
