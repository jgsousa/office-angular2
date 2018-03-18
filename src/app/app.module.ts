import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyListComponent } from './my-list/my-list.component';
import { ContractsService } from './contracts.service';
import { MyListItemComponent } from './my-list-item/my-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyListComponent,
    MyListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
