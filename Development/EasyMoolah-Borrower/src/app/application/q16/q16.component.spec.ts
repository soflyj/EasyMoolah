import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q16Component } from './q16.component';

describe('Q16Component', () => {
  let component: Q16Component;
  let fixture: ComponentFixture<Q16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
