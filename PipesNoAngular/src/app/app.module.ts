import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

import { AppComponent } from './app.component';
import {FilesizePipe} from './pipes/filesize.pipe'


@NgModule({
  declarations: [
    AppComponent,
    FilesizePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }    
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
