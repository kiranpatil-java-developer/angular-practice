import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6taskparentComponent } from './day6taskparent.component';

describe('Day6taskparentComponent', () => {
  let component: Day6taskparentComponent;
  let fixture: ComponentFixture<Day6taskparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6taskparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6taskparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
