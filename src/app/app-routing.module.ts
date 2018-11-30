import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FlightSearchComponent } from './flight-booking/flight-search/flight-search.component';
import { FlightEditComponent } from './flight-booking/flight-edit/flight-edit.component';
import { FlightTypeaheadComponent } from './flight-booking/flight-typeahead/flight-typeahead.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking/flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flight-booking/flight-edit',
    component: FlightEditComponent
  },
  {
    path: 'flight-booking/flight-typeahead',
    component: FlightTypeaheadComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
