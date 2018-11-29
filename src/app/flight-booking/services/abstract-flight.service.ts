import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from '../../app.token';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';
//import { DummyFlightService } from './dummy-flight.service';

@Injectable({
  providedIn: 'root',
  useClass: FlightService,
  deps: [
    HttpClient,
    BASE_URL
  ]
})
export abstract class AbstractFlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

  abstract save(flight: Flight): Observable<Flight>;
}
