import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Flight } from '../../entities/flight';

const dummyFlight = {
  id: 17,
  from: 'Graz',
  to: 'Hamburg',
  date: '2017-02-27',
  delayed: false
};

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([ { ...dummyFlight } ]);
  }

  save(flight: Flight): Observable<Flight> {
    return of({ ...dummyFlight });
  }
}
