import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day4task',
  templateUrl: './day4task.component.html',
  styleUrls: ['./day4task.component.css'],
})
export class Day4taskComponent implements OnInit {
  name: string = 'KIRAN PATIL';
  age: number = 28;

  isDisabled: boolean | undefined;

  constructor() {}

  isDisabledLogic(): void {
    if (this.name === 'KIRAN PATIL') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  ngOnInit(): void {}
}
