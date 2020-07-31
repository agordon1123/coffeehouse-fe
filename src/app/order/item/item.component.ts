import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() product: any
  @Output() itemAdded = new EventEmitter()
  
  addToCart(product: Object) {
    this.itemAdded.emit(product)
  }

  constructor() { }

  ngOnInit(): void { }

}
