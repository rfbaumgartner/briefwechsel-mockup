import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { LetterComponent } from './letter/letter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PersonComponent } from './person/person.component';
import { SimpleSearchComponent } from './simple-search/simple-search.component';
import { LetterListComponent } from './letter-list/letter-list.component';
import { PlaceComponent } from './place/place.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
    MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatListModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    RouterModule
  ],
  declarations: [
    FilterComponent,
    LetterComponent,
    NavbarComponent,
    PersonComponent,
    SimpleSearchComponent,
    LetterListComponent,
    PlaceComponent,
    NotFoundComponent
  ],
  exports: [
    FilterComponent,
    LetterComponent,
    NavbarComponent,
    PersonComponent,
    SimpleSearchComponent,
    LetterListComponent,
    PlaceComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
