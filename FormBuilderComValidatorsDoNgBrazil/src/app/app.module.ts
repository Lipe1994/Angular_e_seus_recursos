import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
