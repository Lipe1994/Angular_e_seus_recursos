import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ProductComponent } from "./product/product.component";
import { CommonModule } from "@angular/common";
import { ProductsRoutingModule } from "./product-routing.module";
import { ProductRouterOutletComponent } from "./app.product.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from "src/app/core/services/product.service";
import { ProductResolve } from "src/app/core/services/product.resolve";

@NgModule({
    declarations:[
        ProductRouterOutletComponent,
        ProductsComponent,
        ProductComponent,
        ProductDetailsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    providers: [
        ProductService,
        ProductResolve
    ],
    exports: [
    ]
})
export class ProductsModule{}