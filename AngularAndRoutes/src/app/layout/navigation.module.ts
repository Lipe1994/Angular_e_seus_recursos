import { NgModule } from "@angular/core";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
    declarations:[
        LayoutComponent,
        BodyComponent,
        FooterComponent,
        NavComponent
    ],
    imports:[
        CommonModule,
        AppRoutingModule
    ],
    exports:[
        LayoutComponent,
        BodyComponent,
        FooterComponent,
        NavComponent
    ]
})
export class NavigationModule{}