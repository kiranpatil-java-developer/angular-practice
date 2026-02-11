import { Component } from '@angular/core';
import { ValidationServiceService } from '../validation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // providers: [ValidationServiceService], // This is for non-singleton service
})
export class RegisterComponent {
  error: string = '';
  success: string = '';

  name: string = '';
  phone: string = '';
  age: number | null = null;
  password: string = '';

  constructor(
    private validationService: ValidationServiceService,
    private router: Router,
  ) {}

  register(): void {
    this.error = '';
    this.success = '';

    if (!this.validationService.isValidName(this.name)) {
      this.error = 'Invalid name';
      return;
    }

    if (!this.validationService.isValidPhoneNumber(this.phone)) {
      this.error = 'Invalid phone number';
      return;
    }

    if (!this.validationService.isValidAge(Number(this.age))) {
      this.error = 'Age must be greater than 18';
      return;
    }

    if (!this.validationService.isValidPassword(this.password)) {
      this.error = 'Invalid password';
      return;
    }

    this.router.navigate(['login']);
  }
}
