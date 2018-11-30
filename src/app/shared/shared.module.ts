import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CityPipe } from './pipes/city.pipe';
import { CityDirective } from './validators/city.directive';
import { AsyncCityDirective } from './validators/async-city.directive';
import { RoundTripDirective } from './validators/round-trip.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CityPipe,
    CityDirective,
    AsyncCityDirective,
    RoundTripDirective
  ],
  exports: [
    CityPipe,
    CityDirective,
    AsyncCityDirective,
    RoundTripDirective,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
