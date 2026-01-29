import { Component } from '@angular/core';

// Interface
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Enum
enum Role {
  ADMIN,
  USER,
  GUEST
}

// Type alias
type ID = number | string;

// Tuple type
type Coordinates = [number, number];

@Component({
  selector: 'app-corets1',
  templateUrl: "corets1.component.html",
})
export class Corets1Component {

  // Primitive data types
  username: string = 'Kiran';
  age: number = 25;
  isLoggedIn: boolean = true;

  // Special types
  nothing: null = null;
  notDefined: undefined = undefined;

  // Any & Unknown
  anyValue: any = 'Hello';
  unknownValue: unknown = 10;

  // Union type
  userId: ID = 101;

  // Array types
  numbers: number[] = [1, 2, 3];
  names: Array<string> = ['Kiran', 'Rahul'];

  // Tuple
  location: Coordinates = [18.52, 73.85];

  // Enum
  role: Role = Role.ADMIN;

  // Object using interface
  user: User = {
    id: 1,
    name: 'Kiran Patil',
    isActive: true,
  };

  // Constructor
  constructor() {
    this.runDemo();
  }

  // Arrow function
  add = (a: number, b: number): number => a + b;

  // Arrow function
  square = (x: number): number => x * x;

  // Function returning void
  logMessage(message: string): void {
    console.log(message);
  }

  // Function returning never
  throwError(message: string): never {
    throw new Error(message);
  }

  runDemo(): void {
    // Primitive types
    console.log(this.username, this.age, this.isLoggedIn);

    // Null & Undefined
    console.log(this.nothing, this.notDefined);

    // Any
    this.anyValue = 100;
    console.log(this.anyValue);

    // Unknown (type check required)
    if (typeof this.unknownValue === 'number') {
      console.log(this.unknownValue + 10);
    }

    // Union type
    console.log(this.userId);

    // Arrays
    console.log(this.numbers, this.names);

    // Tuple
    console.log(this.location);

    // Enum
    console.log(this.role);

    // Interface object
    console.log(this.user);

    // Arrow functions
    console.log(this.add(5, 10));
    console.log(this.square(4));

    // ES6 template literal
    const msg = `Welcome ${this.username}`;
    console.log(msg);

    // ES6 destructuring
    const { name, isActive } = this.user;
    console.log(name, isActive);

    // ES6 spread operator
    const newNumbers = [...this.numbers, 4, 5];
    console.log(newNumbers);

    // Default parameter
    console.log(this.greet());
    console.log(this.greet('Kiran'));
  }

  // Default parameter example
  greet(name: string = 'User'): string {
    return `Hello ${name}`;
  }
}
