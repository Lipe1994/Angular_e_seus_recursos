import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor() {

   }

  ngOnInit() {
    this.products = [
      {name: 'Livro', image: '/assets/imgs/livro.png', description: 'loren ipsun', active: true},
      {name: 'Manete', image: '/assets/imgs/manete.jpg', description: 'loren ipsun', active: true},
      {name: 'PC', image: '/assets/imgs/pc.png', description: 'loren ipsun', active: true},
      {name: 'Radio', image: '/assets/imgs/radio.png', description: 'loren ipsun', active: true},
      {name: 'Livro', image: '/assets/imgs/ps4.jpg', description: 'loren ipsun', active: true},
      {name: 'Tv', image: '/assets/imgs/tv.jpg', description: 'loren ipsun', active: true},
      {name: 'Livro', image: '/assets/imgs/livro.png', description: 'loren ipsun', active: false},
      {name: 'Livro', image: '/assets/imgs/livro.png', description: 'loren ipsun', active: true},
      {name: 'Manete', image: '/assets/imgs/manete.jpg', description: 'loren ipsun', active: true},
      {name: 'PC', image: '/assets/imgs/pc.png', description: 'loren ipsun', active: true},
      {name: 'Radio', image: '/assets/imgs/radio.png', description: 'loren ipsun', active: true},
      {name: 'Livro', image: '/assets/imgs/ps4.jpg', description: 'loren ipsun', active: true},
      {name: 'Tv', image: '/assets/imgs/tv.jpg', description: 'loren ipsun', active: true},
      {name: 'Livro', image: '/assets/imgs/livro.png', description: 'loren ipsun', active: true},
    ]
  }

  mudarStatus(event: Product){
    event.active = !event.active;
  }

}
