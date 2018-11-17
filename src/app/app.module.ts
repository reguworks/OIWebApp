import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './services/loader-interceptor.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { GoInsuranceComponent } from './pages/services/go-insurance/go-insurance.component';
import { BaseComponent } from './pages/base/base.component';
import { NavbarComponent } from './pages/html-components/navbar/navbar.component';
import { FooterComponent } from './pages/html-components/footer/footer.component';
import { BaseAdminComponent } from './pages/admin-panel/base-admin/base-admin.component';
import { UsersComponent } from './pages/admin-panel/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './pages/html-components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    GoInsuranceComponent,
    BaseComponent,
    NavbarComponent,
    FooterComponent,
    BaseAdminComponent,
    UsersComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
