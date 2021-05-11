import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProductsModule } from "./products/products.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations:[
        HomeComponent,
        AboutComponent,
        NotFoundComponent
    ],
    imports:[
        CommonModule,
        ProductsModule
    ],
    exports:[
        HomeComponent,
        AboutComponent,
        NotFoundComponent
    ]
})
export class PageModule{}