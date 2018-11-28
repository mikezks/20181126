import { Component, OnInit } from '@angular/core';
import { Flight } from '../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Graz';
  to: string = 'Hamburg';
  flights: Flight[] = [];
  selectedFlight: Flight;
  message: string;

  constructor(
    private flightService: FlightService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  search(): void {
    this.flightService
      .find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights,
        err => console.error('Error loading flights', err)
      );
  }

  save(): void {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    this.http
      .post<Flight>(
        url,
        this.selectedFlight,
        { headers }
      )
      .subscribe(
        flight => {
          this.selectedFlight = flight;
          this.message = 'Erfolgreich gespeichert!';
        },
        err => {
          console.error('Fehler beim Speichern', err);
          this.message = 'Fehler beim Speichern: ' + JSON.stringify(err, null, '\t');
        }
      );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
