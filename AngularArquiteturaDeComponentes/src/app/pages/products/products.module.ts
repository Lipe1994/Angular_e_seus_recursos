import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { ProductComponent } from "./product/product.component";
import { CommonModule } from "@angular/common";
import { ProductsRoutingModule } from "./product-routing.module";

@NgModule({
    declarations:[
        ProductsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    exports: [
        ProductsComponent,
        ProductComponent
    ]
})
export class ProductsModule{}