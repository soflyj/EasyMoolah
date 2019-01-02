import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Q8Component } from './q8.component';

describe('Q8Component', () => {
  let component: Q8Component;
  let fixture: ComponentFixture<Q8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Q8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Q8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
