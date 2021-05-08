/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideographyComponent } from './videography.component';

describe('VideographyComponent', () => {
  let component: VideographyComponent;
  let fixture: ComponentFixture<VideographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
