import { Component, OnInit } from '@angular/core';
import { ValidationServiceService } from '../validation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  phoneNumber: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private validationService: ValidationServiceService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  loginChecks(): void {
    if (!this.validationService.isValidPhoneNumber(this.phoneNumber)) {
      this.errorMessage = 'Phone number must be valid';
      return;
    }

    if (!this.validationService.isValidPassword(this.password)) {
      this.errorMessage =
        'Password must be at least 8 characters with uppercase, lowercase and number';
      return;
    }

    if (this.phoneNumber === '1234567890' && this.password === 'Kiran@123') {
      this.errorMessage = '';
      this.router.navigate(['dashboard']);
    } else {
      this.errorMessage = 'Invalid Credentials';
    }
  }
}
