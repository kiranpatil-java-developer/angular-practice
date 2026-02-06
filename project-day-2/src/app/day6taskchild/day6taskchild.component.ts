import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-day6taskchild',
  templateUrl: './day6taskchild.component.html',
  styleUrls: ['./day6taskchild.component.css'],
})
export class Day6taskchildComponent implements OnChanges {
  // Parent → Child
  @Input() msg?: string;
  @Input() product?: {
    id: number;
    name: string;
    brand: string;
    price: number;
  };

  // Child → Parent
  @Output() childMessageEmitter = new EventEmitter<string>();
  @Output() productsEmitter = new EventEmitter<any[]>();

  // Internal array
  products = [
    { id: 1, name: 'Laptop', price: 60000 },
    { id: 2, name: 'Tablet', price: 35000 },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['msg']) {
      console.log('Parent msg:', changes['msg'].currentValue);
    }
  }

  sendMessageToParent(): void {
    this.childMessageEmitter.emit('Message from Child Component');
  }

  sendProductsToParent(): void {
    this.productsEmitter.emit(this.products);
  }
}
