import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SearchModule } from './search/search.module';
import { IndexModule } from './index/index.module';
import { EditionModule } from './edition/edition.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AboutModule,
    BrowserModule,
    BrowserAnimationsModule,
    EditionModule,
    FormsModule,
    HomeModule,
    IndexModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '**', component: AppComponent }
    ]),
    SearchModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
