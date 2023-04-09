import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _router: Router) {}

  items: any;
  total: number = 0;

  ngOnInit() {
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart') || '{}');
    console.log(cart);
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        id: item.food_id,
        price: item.food_price,
        image: item.food_img,
        product: item.food_name,
        quantity: item.food_quantity,
      });
      this.total += item.food_price * item.food_quantity;
    }
  }

  isCartEmpty(): boolean {
    if (this.items.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeItem(productID: any) {
    let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');

    cart.splice(productID, 1);

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  }

  increment(productID: any) {
    let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');

    JSON.parse(cart[productID]).food_quantity += 1;

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  }

  decrement(productID: any) {
    let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');

    cart[productID].food_quantity -= 1;

    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
  }
  checkout() {
    this._router.navigate(['/checkout']);
  }
}

