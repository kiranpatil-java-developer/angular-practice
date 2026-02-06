import { Component } from '@angular/core';

@Component({
  selector: 'app-day6taskparent',
  templateUrl: './day6taskparent.component.html',
  styleUrls: ['./day6taskparent.component.css'],
})
export class Day6taskparentComponent {
  msg: string = 'Hi, I am Parent';

  product = {
    id: 1,
    name: 'Mobile Phone',
    brand: 'Apple',
    price: 85000,
  };

  childMsg: string = '';

  receivedProducts: any[] = [];

  receiveChildMessage(message: string): void {
    this.childMsg = message;
  }

  receiveProductsFromChild(products: any[]): void {
    this.receivedProducts = products;
  }
}
