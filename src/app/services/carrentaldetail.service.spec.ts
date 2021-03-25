import { TestBed } from '@angular/core/testing';

import { CarrentaldetailService } from './carrentaldetail.service';

describe('CarrentaldetailService', () => {
  let service: CarrentaldetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrentaldetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
