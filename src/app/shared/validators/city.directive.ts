import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CityDirective,
    multi: true
  }]
})
export class CityDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl): ValidationErrors | null {
    const validCities: string[] = [
      'Hamburg',
      'Graz',
      'Wien',
      'Berlin'
    ];

    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities
        }
      };
    }

    return null;
  }

}
