import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'suche', component: SearchComponent }
    ]),
    MatInputModule,
    MatSidenavModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
