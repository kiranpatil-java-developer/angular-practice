import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day5task',
  templateUrl: './day5task.component.html',
  styleUrls: ['./day5task.component.css'],
})
export class Day5taskComponent implements OnInit {
  // *ngIf
  textColor: string = 'white';
  isLoggedIn: boolean = true;
  isAdmin: boolean = false;

  status: 'loading' | 'success' | 'error' = 'loading';

  user = {
    name: 'Kiran',
    role: 'Developer',
  };

  constructor() {}

  ngOnInit(): void {}

  setBlue(): void {
    this.textColor = 'blue';
  }

  setRed(): void {
    this.textColor = 'red';
  }

  //-----------------------------------------
  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }

  toggleAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }

  changeStatus(status: 'loading' | 'success' | 'error'): void {
    this.status = status;
  }

  //=======================================================================
  //=======================================================================

  // *ngFor

  technologies: string[] = ['Angular', 'React', 'Next', 'Vue'];

  //=======================================================================
  //=======================================================================

  // *ngSwitch

  age: number | null = null;

  get ageStatus(): string {
    if (this.age === null) return 'NONE';
    if (this.age < 18) return 'YOUNG';
    if (this.age <= 60) return 'ELIGIBLE';
    return 'OLD';
  }

  //=======================================================================
  //=======================================================================
  // ngClass

  isActive: boolean = false;
  isDisabled: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }

  //=======================================================================
  //=======================================================================
  // ngStyle

  fontSize: string = '18px';
  bgColor: string = 'lightgray';

  increaseFont(): void {
    this.fontSize = '24px';
  }

  decreaseFont(): void {
    this.fontSize = '14px';
  }

  changeBg(color: string): void {
    this.bgColor = color;
  }
}
