import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes it a singleton service SCOPE: application-wide
})
export class ValidationServiceService {
  constructor() {}

  isValidName(name: string): boolean {
    if (!name) return false;
    const trimmedName = name.trim();
    return /^[A-Za-z]+$/.test(trimmedName);
  }



  isValidAge(age: number): boolean {
    return age !== null && age !== undefined && age >= 18;
  }



  isValidPhoneNumber(phoneNumber: string): boolean {
    if (!phoneNumber) return false;
    const trimmedPhone = phoneNumber.trim();
    return /^[0-9]{10}$/.test(trimmedPhone);
  }

  

  isValidPassword(password: string): boolean {
    if (!password) return false;
    return /^.{5,}$/.test(password); // At least 5 characters
  }
}
