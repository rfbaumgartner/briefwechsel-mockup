import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditionComponent } from './edition/edition.component';
import { EditionHomeComponent } from './edition-home/edition-home.component';
import { EditionLetterComponent } from './edition-letter/edition-letter.component';
import { EditionVisualizationComponent } from './edition-visualization/edition-visualization.component';
import { MatInputModule, MatProgressBarModule, MatSidenavModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { PlaceService } from '../core/place.service';
import { PersonService } from '../core/person.service';
import { LetterService } from '../core/letter.service';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule,
    RouterModule.forChild([
      { path: 'briefe', component: EditionComponent,
        children: [
          { path: '', component: EditionHomeComponent },
          { path: ':letter', component: EditionLetterComponent }
        ]},
    ]),
    SharedModule
  ],
  declarations: [
    EditionComponent,
    EditionHomeComponent,
    EditionLetterComponent,
    EditionVisualizationComponent
  ],
  providers: [
    LetterService,
    PersonService,
    PlaceService
  ]
})
export class EditionModule { }
