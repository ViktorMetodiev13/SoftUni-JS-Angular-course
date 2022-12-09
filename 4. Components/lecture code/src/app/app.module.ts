import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TestComponentComponent } from './test-component/test-component.component';

NgModule({
  // Template specific items
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule // this includes CommonModule
  ],
  providers: [], // used for DI
  bootstrap: [AppComponent]
})
export class AppModule { }
