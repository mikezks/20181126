import { TestBed } from '@angular/core/testing';

import { AbstractFlightService } from './abstract-flight.service';

describe('AbstractFlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractFlightService = TestBed.get(AbstractFlightService);
    expect(service).toBeTruthy();
  });
});
