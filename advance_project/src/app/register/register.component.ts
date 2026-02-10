import { Component } from '@angular/core';
import { ValidationServiceService } from '../validation-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  error = '';
  success = '';

  constructor(private validationService: ValidationServiceService) {}

  register(name: string, phone: string, age: string, password: string) {
    this.error = '';
    this.success = '';

    if (!this.validationService.isValidName(name)) {
      this.error = 'Invalid name';
      return;
    }

    if (!this.validationService.isValidPhoneNumber(phone)) {
      this.error = 'Invalid phone number';
      return;
    }

    if (!this.validationService.isValidAge(+age)) {
      this.error = 'Age must be greater than 18';
      return;
    }

    if (!this.validationService.isValidPassword(password)) {
      this.error = 'Invalid password';
      return;
    }

    this.success = 'Registration successful';
  }
}
