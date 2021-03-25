import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrentaldetailComponent } from './carrentaldetail.component';

describe('CarrentaldetailComponent', () => {
  let component: CarrentaldetailComponent;
  let fixture: ComponentFixture<CarrentaldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrentaldetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrentaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
