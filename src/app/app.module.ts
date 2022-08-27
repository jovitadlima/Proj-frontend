import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfficerDashboardComponent } from './officer-dashboard/officer-dashboard.component';
import { OfficerLoginComponent } from './officer-login/officer-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { StudentappformsComponent } from './studentappforms/studentappforms.component';
import { InstituteregformsComponent } from './instituteregforms/instituteregforms.component';

@NgModule({
  declarations: [
    AppComponent,
    OfficerDashboardComponent,
    OfficerLoginComponent,
    NavbarComponent,
    LandingPageComponent,
    GuidelinesComponent,
    StudentappformsComponent,
    InstituteregformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
