import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5taskComponent } from './day5task.component';

describe('Day5taskComponent', () => {
  let component: Day5taskComponent;
  let fixture: ComponentFixture<Day5taskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day5taskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day5taskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
