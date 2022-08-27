import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficerDashboardComponent } from './officer-dashboard/officer-dashboard.component';
import { OfficerLoginComponent } from './officer-login/officer-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentappformsComponent } from './studentappforms/studentappforms.component';
import { InstituteregformsComponent } from './instituteregforms/instituteregforms.component';

const routes: Routes = [
  {path:'officer-dashboard',component:OfficerDashboardComponent},
  {path:'officer-login',component:OfficerLoginComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'studentappforms', component:StudentappformsComponent},
  {path:'instituteregforms', component:InstituteregformsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
