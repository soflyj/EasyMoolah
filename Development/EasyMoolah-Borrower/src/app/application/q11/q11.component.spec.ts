import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q11Component } from './q11.component';

describe('Q11Component', () => {
  let component: Q11Component;
  let fixture: ComponentFixture<Q11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
