import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { map, delay, filter, tap } from 'rxjs/operators';

// Former way importing - do not use this today anymore!
// import 'rxjs/add/operator/map';
import { AbstractFlightService } from 'src/app/flight-booking/services/abstract-flight.service';

@Directive({
  selector: 'input[asyncCity]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: AsyncCityDirective,
    multi: true
  }]
})
export class AsyncCityDirective implements AsyncValidator {

  constructor(private flightService: AbstractFlightService) { }

  validate(c: AbstractControl): Observable<ValidationErrors | null> {
    return this.flightService
      .find(c.value, '')
      .pipe(
        map(
          flights => ((flights.length > 0 || c.value.length <= 4) ? {} : { asyncCity: true })
        ),
        // Just for demo.
        delay(4000)
      );
  }
}
