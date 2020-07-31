import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './nav/banner/banner.component';
import { LandingComponent } from './landing/landing.component';
import { OrderComponent } from './order/order.component';
import { ItemComponent } from './order/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    LandingComponent,
    OrderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
