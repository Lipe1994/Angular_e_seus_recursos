import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ProductsModule } from "./products/products.module";
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations:[
        HomeComponent,
        AboutComponent,
        NotFoundComponent,
        RegisterComponent
    ],
    imports:[
        CommonModule,
        ProductsModule,
        ReactiveFormsModule
    ],
    exports:[
        HomeComponent,
        AboutComponent,
        NotFoundComponent
    ]
})
export class PageModule{}