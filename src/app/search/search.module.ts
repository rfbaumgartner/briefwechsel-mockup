import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule, MatInputModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'suche', component: SearchComponent }
    ]),
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
