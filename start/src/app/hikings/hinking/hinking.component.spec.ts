import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinkingComponent } from './hinking.component';

describe('HinkingComponent', () => {
  let component: HinkingComponent;
  let fixture: ComponentFixture<HinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinkingComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
