import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {

  @Input() products: any[]
  @Output() itemAdded = new EventEmitter()
  
  addToCart(product: Object) {
    this.itemAdded.emit(product)
  }

  constructor() { }

  ngOnInit(): void { }

}
