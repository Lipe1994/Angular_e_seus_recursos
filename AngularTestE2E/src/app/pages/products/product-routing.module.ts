import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductRouterOutletComponent } from "./app.product.component";
import { ProductsComponent } from "./products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductResolve } from "src/app/core/services/product.resolve";

const routes : Routes = [
    {path:'', component: ProductRouterOutletComponent,
        children:[
            {path:'', redirectTo: 'actives', pathMatch: 'full' },
            {path:'details/:id', component: ProductDetailsComponent},
            {
                path:':state',
                component: ProductsComponent,
                resolve: {
                    products: ProductResolve
                }
            },
            
            
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule{}