import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightAutocompleteComponent } from './flight-autocomplete.component';

describe('FlightAutocompleteComponent', () => {
  let component: FlightAutocompleteComponent;
  let fixture: ComponentFixture<FlightAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
