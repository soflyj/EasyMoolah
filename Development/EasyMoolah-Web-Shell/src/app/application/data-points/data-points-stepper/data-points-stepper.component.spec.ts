import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPointsStepperComponent } from './data-points-stepper.component';

describe('DataPointsStepperComponent', () => {
  let component: DataPointsStepperComponent;
  let fixture: ComponentFixture<DataPointsStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPointsStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPointsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
