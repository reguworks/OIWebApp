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
import { BaseAdminComponent } from './pages/admin-panel/base-admin/base-admin.component';
import { UsersComponent } from './pages/admin-panel/users/users.component';
import { HttpClientModule } from '@angular/common/http';

import { NgHttpLoaderModule } from 'ng-http-loader';
import { JwtModule } from '@auth0/angular-jwt';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import domain from './settings/db-domain';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

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
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [domain],
        blacklistedRoutes: [domain + '/users/login']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  
  
})
export class AppModule { }
