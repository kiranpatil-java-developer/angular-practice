import { Component, OnInit } from '@angular/core';
import { ValidationServiceService } from '../validation-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  phoneNumber!: string;
  password!: string;
  errorMessage!: string;

  constructor(private validationService: ValidationServiceService) {}

  loginChecks(phoneNumber: string, password: string) {
    if (!this.validationService.isValidPhoneNumber(this.phoneNumber)) {
      this.errorMessage = 'Phone number must be valid';
    } else if (!this.validationService.isValidPassword(this.password)) {
      this.errorMessage =
        'Password must be at least 8 characters with uppercase, lowercase and number';
    } else {
      this.errorMessage = '';
      alert('Login Successfully');
    }
  }

  ngOnInit(): void {}
}
