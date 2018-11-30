import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

export function validateCityWithParams(whiteListCities: string) {
  return (c: AbstractControl) => {
    const validCities: string[] = whiteListCities.split(',');

    if (c.value && validCities.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validCities
        }
      };
    }

    return null;
  };
}

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;
  validateFn: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.validateFn = validateCityWithParams('Berlin,Graz,Wien,Hamburg');

    this.editForm = this.fb.group({
      id:   [1],
      from: [
        'Wien',
        [
          Validators.required,
          Validators.minLength(3),
          validateCityWithParams('Berlin,Graz,Wien,Hamburg')
          //this.validateFn
        ]
      ],
      to:   [],
      date: []
    });

    console.log(this.editForm.value);
    console.log(this.editForm.valid);
    console.log(this.editForm.touched);
    console.log(this.editForm.dirty);

    /* this.editForm.valueChanges
      .subscribe(value => console.log(value)); */

    this.editForm.controls['from'].valueChanges
      .subscribe(value => console.log(value));
  }

}
