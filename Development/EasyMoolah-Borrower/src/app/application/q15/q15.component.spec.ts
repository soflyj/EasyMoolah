import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q15Component } from './q15.component';

describe('Q15Component', () => {
  let component: Q15Component;
  let fixture: ComponentFixture<Q15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
