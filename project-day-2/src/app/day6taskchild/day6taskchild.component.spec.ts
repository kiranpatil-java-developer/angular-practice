import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6taskchildComponent } from './day6taskchild.component';

describe('Day6taskchildComponent', () => {
  let component: Day6taskchildComponent;
  let fixture: ComponentFixture<Day6taskchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day6taskchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day6taskchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
