import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { Day4taskComponent } from './day4task/day4task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    ComponentLifecycleComponent,
    Day4taskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // ← REQUIRED
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
