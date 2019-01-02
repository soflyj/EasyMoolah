import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q1Component } from './q1.component';

describe('Q1Component', () => {
  let component: Q1Component;
  let fixture: ComponentFixture<Q1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
