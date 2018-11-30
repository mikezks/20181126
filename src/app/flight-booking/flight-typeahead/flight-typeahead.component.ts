import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { debounceTime, switchMap, tap, filter, delay } from 'rxjs/operators';

@Component({
  selector: 'app-flight-typeahead',
  templateUrl: './flight-typeahead.component.html',
  styleUrls: ['./flight-typeahead.component.scss']
})
export class FlightTypeaheadComponent implements OnInit {
  control: FormControl = new FormControl();
  flights$: Observable<Flight[]>;
  loading: boolean;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.flights$ = this.control
      .valueChanges
      .pipe(
        debounceTime(300),
        filter(input => input.length > 2),
        tap(() => this.loading = true),
        switchMap(input => this.load(input)),
        delay(2000),
        tap(() => this.loading = false)
      );
  }

  load(from: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('from', from);

    return this.http
      .get<Flight[]>(url, { headers, params });
  }
}
