import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4taskComponent } from './day4task.component';

describe('Day4taskComponent', () => {
  let component: Day4taskComponent;
  let fixture: ComponentFixture<Day4taskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4taskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4taskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
