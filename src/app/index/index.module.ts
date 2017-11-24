import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import { IndexHomeComponent } from './index-home/index-home.component';
import { IndexPersonComponent } from './index-person/index-person.component';
import { IndexPlaceComponent } from './index-place/index-place.component';
import { IndexPlaceOverviewComponent } from './index-place-overview/index-place-overview.component';
import { IndexPlaceEntryComponent } from './index-place-entry/index-place-entry.component';
import { IndexPersonEntryComponent } from './index-person-entry/index-person-entry.component';
import { IndexPersonOverviewComponent } from './index-person-overview/index-person-overview.component';
import { MatInputModule, MatListModule, MatSidenavModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    RouterModule.forChild([
      { path: 'index', component: IndexComponent, children: [
        { path: '', component: IndexHomeComponent },
        { path: 'pers', component: IndexPersonComponent, children: [
          { path: '', component: IndexPersonOverviewComponent },
          { path: ':personId', component: IndexPersonEntryComponent }
        ]}
        ,
        { path: 'ort', component: IndexPlaceComponent, children: [
          { path: '', component: IndexPlaceOverviewComponent },
          { path: ':placeId', component: IndexPlaceEntryComponent }
        ]}
      ]}
    ]),
    SharedModule
  ],
  declarations: [
    IndexComponent,
    IndexHomeComponent,
    IndexPersonComponent,
    IndexPlaceComponent,
    IndexPlaceOverviewComponent,
    IndexPlaceEntryComponent,
    IndexPersonEntryComponent,
    IndexPersonOverviewComponent
  ]
})
export class IndexModule { }
