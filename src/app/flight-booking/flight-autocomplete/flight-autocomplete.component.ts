import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of, BehaviorSubject } from 'rxjs';

export interface DemoData {
  country: string;
  cities: string[];
}

export interface DemoConfig {
  countryWhiteList: string[];
  maxResults: number;
  dataUrl: string;
}

/**
 * Config for this demo.
 */
const DEMO_CONFIG: DemoConfig = {
  countryWhiteList: [
    'Germany',
    'Austria',
    'Switzerland',
    'Poland'
  ],
  maxResults: 5,
  dataUrl: '../../assets/demo-data/countries-cities.json'
};

@Component({
  selector: 'app-flight-autocomplete',
  templateUrl: './flight-autocomplete.component.html',
  styleUrls: ['./flight-autocomplete.component.scss']
})
export class FlightAutocompleteComponent implements OnInit {
  demoConfig: DemoConfig = DEMO_CONFIG;
  dropdownGroup: FormGroup;
  demoData: DemoData[];
  searchResult$: Observable<string[]>;
  selectedCity$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  showPanel: boolean;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder) {
  }

  /**
   * Create form and metadata.
   * Load demo.
   * Define observable stream for value changes of the input field
   * and filter demo data.
   */
  ngOnInit(): void {
    this.dropdownGroup = this.fb.group({
      city: []
    });
    this.getDemoData();
    this.searchResult$ =
      this.dropdownGroup.controls.city.valueChanges
        .pipe(
          switchMap(filterValue => {
              if (filterValue) {
                this.showPanel = true;
                return this.filterDemoData$(filterValue);
              }
              return of([]);
            }
          )
        );
  }

  /**
   * Load demo data from assets folder: Cities mapped to their countries.
   * Filter only those countries which match the whitelist config.
   * https://github.com/meMo-Minsk/all-countries-and-cities-json/blob/master/countries.json
   */
  getDemoData() {
    this.http
      .get<DemoData[]>(this.demoConfig.dataUrl)
      .subscribe(data => {
        this.demoData	= Object.keys(data)
          .filter(country =>
            this.demoConfig.countryWhiteList
              .find(countryFromWhiteList => country === countryFromWhiteList)
          )
          .map(country => ({ country, cities: data[country] }));
      });
  }

  /**
   * Return filtered data as observable stream that contains the input filter value.
   * @param filterValue 
   */
  filterDemoData$(filterValue: string): Observable<string[]> {
    let result: string[] = [];
    this.demoData
      .forEach(country =>
        result = result.concat(country.cities
          .filter(city =>
            city.toLowerCase().indexOf(filterValue.toLowerCase()) > -1
          )
          .map(city =>
            `${city} (${country.country})`
          )
        )
      );

    return of(result
      .slice(0, this.demoConfig.maxResults)
    );
  }
  
  /**
   * Select a city by clicking on a dropdown panel value.
   * Send new event to selectedCity$ behavior subject (previous value is
   * immediately available after subscription to the stream).
   * Hide dropdown panel.
   * Set input value.
   */
  selectCity(city: string) {
    this.selectedCity$.next(city);
    this.showPanel = false;
    this.dropdownGroup.controls.city.setValue(city);
  }
}
