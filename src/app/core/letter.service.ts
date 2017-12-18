import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonService } from './person.service';
import { PlaceService } from './place.service';
import { Letter } from './letter';

@Injectable()
export class LetterService {

  constructor(private httpClient: HttpClient, private personService: PersonService, private placeService: PlaceService) {}

  getLetterById(id: string): Letter {
    let letter = new Letter();
    this.httpClient.get('../../assets/mockupdata/letters.json')
      .subscribe((res: any) => {
        for (let i = 0; i < res.letters.length; i++) {
          if (res.letters[i].id === id) {
            letter.id = res.letters[i].id;
            letter.date = res.letters[i].date;
            letter.title = res.letters[i].title;
            letter.sender = this.personService.getPersonById(res.letters[i].sender);
            letter.receiver = this.personService.getPersonById(res.letters[i].receiver);
            letter.place = this.placeService.getPlaceById(res.letters[i].place);
          }
        }
      });
    return letter;
  }

  getLetterList(): Array<Letter> {
    let letters: Array<Letter> = [];
    this.httpClient.get('../../assets/mockupdata/letters.json')
      .subscribe((res: any) => {
        for (let i = 0; i < res.letters.length; i++) {
          let letter = new Letter();
          letter.id = res.letters[ i ].id;
          letter.date = res.letters[ i ].date;
          letter.title = res.letters[ i ].title;
          letter.sender = this.personService.getPersonById(res.letters[i].sender);
          letter.receiver = this.personService.getPersonById(res.letters[i].receiver);
          letter.place = this.placeService.getPlaceById(res.letters[i].place);
          letters[i] = letter;
        }
      });
    return letters;
  }

  searchLetters(selections: Map<String, any>): Array<Letter>{
    let letters: Array<Letter> = [];

    let selectedPlaces = selections.get('ort');
    let selectedPeople = selections.get('pers');

    this.httpClient.get('../../assets/mockupdata/letters.json')
      .subscribe((res: any) => {
        for (let i = 0; i < res.letters.length; i++) {

          let letter = new Letter();
          letter.id = res.letters[ i ].id;
          letter.date = res.letters[ i ].date;
          letter.title = res.letters[ i ].title;
          letter.sender = this.personService.getPersonById(res.letters[ i ].sender);
          letter.receiver = this.personService.getPersonById(res.letters[ i ].receiver);
          letter.place = this.placeService.getPlaceById(res.letters[ i ].place);
          if (
            (selectedPlaces.indexOf(res.letters[ i ].place) > -1
              || selectedPlaces.length === 0 )
            && (selectedPeople.indexOf(res.letters[ i ].sender) > -1
              || selectedPeople.indexOf(res.letters[ i ].receiver) > -1
              || selectedPeople.length === 0)) {
            letters.push(letter);
          }
        }
      });

    return letters;
  }
}
