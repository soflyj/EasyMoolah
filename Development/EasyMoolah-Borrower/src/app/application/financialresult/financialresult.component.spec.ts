import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialresultComponent } from './financialresult.component';

describe('FinancialresultComponent', () => {
  let component: FinancialresultComponent;
  let fixture: ComponentFixture<FinancialresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
