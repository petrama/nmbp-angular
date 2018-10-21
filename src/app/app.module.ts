import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { 
  MatInputModule,
  MatOptionModule,
  MatToolbarModule,
   MatButtonModule,
    MatSidenavModule,
     MatIconModule,
      MatListModule,
      MatCardModule, 
    MatAutocompleteModule,
  MatGridListModule,
MatRadioModule} from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WhateverComponent } from './whatever/whatever.component';



import { ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { SearchComponent } from './search/search.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WhateverComponent,
    AddMovieComponent,
    SearchComponent,
    AnalyzeComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,

    ReactiveFormsModule,



    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatCardModule,
    MatGridListModule,
    MatRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

constructor(private breakpointObserver: BreakpointObserver) {}


 }
