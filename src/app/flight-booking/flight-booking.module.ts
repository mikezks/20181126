import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightSearchComponent } from './flight-search/flight-search.component';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightTypeaheadComponent } from './flight-typeahead/flight-typeahead.component';
import { FlightAutocompleteComponent } from './flight-autocomplete/flight-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent,
    FlightTypeaheadComponent,
    FlightAutocompleteComponent
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
