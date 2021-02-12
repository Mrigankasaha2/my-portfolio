import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Views/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainbodyComponent } from './Views/mainbody/mainbody.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainbodyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
