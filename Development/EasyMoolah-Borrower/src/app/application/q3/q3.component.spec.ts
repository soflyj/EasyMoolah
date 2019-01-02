import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q3Component } from './q3.component';

describe('Q3Component', () => {
  let component: Q3Component;
  let fixture: ComponentFixture<Q3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
