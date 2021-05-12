import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Product } from "../models/Product";
import { ProductService } from "./product.service";

@Injectable()
export class ProductResolve implements Resolve<Product[]>{
    constructor(private productService: ProductService){}

    resolve(route: ActivatedRouteSnapshot): Product[]{
        return this.productService.productsAll(route.params['state']);
    }

}