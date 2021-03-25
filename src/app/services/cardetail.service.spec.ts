import { TestBed } from '@angular/core/testing';

import { CarDetailService } from './cardetail.service';

describe('CardetailService', () => {
  let service: CardetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
