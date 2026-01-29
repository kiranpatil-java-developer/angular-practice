import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corets1Component } from './corets1.component';

describe('CoretsComponent', () => {
  let component: Corets1Component;
  let fixture: ComponentFixture<Corets1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Corets1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Corets1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
