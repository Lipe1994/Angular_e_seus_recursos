import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private rolter: Router,
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit() {
    this.product$ = this.route.params
    .pipe(
          switchMap(params => of(this.productService.productById(params['id'])) )
      );
  }

  voltar(){
    this.rolter.navigate(['../products']);
  }

}
