import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { GoInsuranceComponent } from './pages/services/go-insurance/go-insurance.component';
import { BaseComponent } from './pages/base/base.component';
import { NavbarComponent } from './pages/html-components/navbar/navbar.component';
import { FooterComponent } from './pages/html-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    GoInsuranceComponent,
    BaseComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
