import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhateverComponent } from './whatever/whatever.component';

import { AddMovieComponent } from './add-movie/add-movie.component';
import { SearchComponent } from './search/search.component';
import { AnalyzeComponent } from './analyze/analyze.component';


const routes: Routes = [

  { path: 'what', component: WhateverComponent },

  { path: 'addMovie', component: AddMovieComponent },
  {path: 'search', component: SearchComponent},
  {path:'analyze',component:AnalyzeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
