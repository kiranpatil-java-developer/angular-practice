import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationServiceService {
  constructor() {}

  isValidName(name: string): boolean {
    return (
      name != null &&
      name.trim().length > 0 &&
      name.trim().match(/^[A-Za-z]+$/) !== null
    );
  }

  isValidAge(age: number): boolean {
    return age != null && age >= 18;
  }

  isValidPhoneNumber(phoneNumber: string): boolean {
    return phoneNumber != null && phoneNumber.length <= 12;
  }

  isValidPassword(password: string): boolean {
    return password != null && password.match(/^[A-Za-z0-9]{6,}$/) !== null;
  }
}
