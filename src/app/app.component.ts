import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // static variables
  title = 'coffeehouse-fe';
  products = [
    {
      title: 'Latte',
      price: 4.15,
      image: '../../assets/latte.jpg'
    },
    {
      title: 'Americano',
      price: 3.35,
      image: '../../assets/americano.jpg'
    },
    {
      title: 'Cappucino',
      price: 3.85,
      image: '../../assets/capuccino.jpg'
    },
    {
      title: 'Pourover Coffee',
      price: 3.50,
      image: '../../assets/pour-over.jpg'
    },
    {
      title: 'Matcha Latte',
      price: 4.35,
      image: '../../assets/matcha.jpg'
    },
    {
      title: 'Macchiato',
      price: 3.65,
      image: '../../assets/macchiato.jpg'
    }
  ];
  cart = JSON.parse(localStorage.getItem('cart'))

  @Output() itemAdded = new EventEmitter()
  
  constructor() {
    this.products = this.products;
    if (this.cart == undefined) {
      this.cart = [];
    } else {
      this.cart = this.cart;
    }
  }

  addToCart(product: Object) {
    this.cart.push(product)
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}
