import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';
import { FlightService } from './flight.service';
//import { DummyFlightService } from './dummy-flight.service';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './flight.token';

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
