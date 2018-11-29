import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CityPipe } from './pipes/city.pipe';
import { CityDirective } from './validators/city.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CityPipe,
    CityDirective
  ],
  exports: [
    CityPipe,
    CityDirective,
    FormsModule
  ]
})
export class SharedModule { }
