import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  todos = [
  { id: 1, description: 'Learn Angular', date: '2026-02-11', time: '09:00 AM', completed: false },
  { id: 2, description: 'Build Todo Dashboard', date: '2026-02-11', time: '11:00 AM', completed: false },
  { id: 3, description: 'Connect Backend API', date: '2026-02-12', time: '02:00 PM', completed: false },
  { id: 4, description: 'Practice coding for 1 hour', date: '2026-02-12', time: '06:00 PM', completed: false },
  { id: 5, description: 'Watch Movie', date: '2026-02-13', time: '08:00 PM', completed: true }
];


  ngOnInit(): void {}
}
