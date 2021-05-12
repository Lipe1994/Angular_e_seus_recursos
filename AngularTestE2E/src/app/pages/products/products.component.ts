import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor(private routeSnapshot: ActivatedRoute) {

   }

  ngOnInit() {

    this.products = this.routeSnapshot.snapshot.data.products;
  }

  mudarStatus(event: Product){
    event.active = !event.active;
  }

}
