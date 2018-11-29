import { Component, OnInit } from '@angular/core';

import { AbstractFlightService } from '../services/abstract-flight.service';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;
  message: string;
  basket: object = {
    3: true,
    5: true
  };

  constructor(private flightService: AbstractFlightService) { }

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
    this.flightService
      .save(this.selectedFlight)
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
