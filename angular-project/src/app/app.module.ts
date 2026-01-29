import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Corets1Component } from './corets1/corets1.component';

@NgModule({
  declarations: [
    AppComponent,
    Corets1Component
  ],
  imports: [
    BrowserModule,
    FormsModule   // ✅ REQUIRED for ngModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
