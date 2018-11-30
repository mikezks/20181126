import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: RoundTripDirective,
    multi: true
  }]
})
export class RoundTripDirective implements Validators {

  constructor() { }

  validate(c: AbstractControl): ValidationErrors | null {
    const group: FormGroup = c as FormGroup;

    const fromCtrl = group.controls['from'];
    const toCtrl = group.controls['to'];

    if (!fromCtrl || !toCtrl) {
      return {};
    }

    if (fromCtrl.value === toCtrl.value) {
      return {
        roundTrip: true
      };
    }
  }
}
