import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q12Component } from './q12.component';

describe('Q12Component', () => {
  let component: Q12Component;
  let fixture: ComponentFixture<Q12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
