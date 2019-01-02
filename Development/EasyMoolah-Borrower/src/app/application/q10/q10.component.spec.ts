import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q10Component } from './q10.component';

describe('Q10Component', () => {
  let component: Q10Component;
  let fixture: ComponentFixture<Q10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
