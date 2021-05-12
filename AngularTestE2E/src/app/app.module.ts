import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { NavigationModule } from './layout/navigation.module';
import { PageModule } from './pages/page.module';
import { SecurityProductGuard } from './core/services/security-product.guard';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    PageModule
  ],
  providers: [SecurityProductGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
