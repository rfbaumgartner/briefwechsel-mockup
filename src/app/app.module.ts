import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDeCh from '@angular/common/locales/de-CH';
import localeFrCh from '@angular/common/locales/fr-CH';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SearchModule } from './search/search.module';
import { IndexModule } from './index/index.module';
import { EditionModule } from './edition/edition.module';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeDeCh, 'de-CH');
registerLocaleData(localeFrCh, 'fr-CH');

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
    HttpClientModule,
    RouterModule.forRoot([
      { path: '**', component: AppComponent }
    ]),
    SearchModule,
    SharedModule
  ],
  providers: [ {provide: LOCALE_ID, useValue: 'de-CH' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
