import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {AppointmentComponent } from './appointment/appointment.component'
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'appointment', component: AppointmentComponent },
  {
    path:'doctor-login',component:DoctorLoginComponent
  },
  {
    path:'doctor-home',component:DoctorHomeComponent
  },
  {
    path:'add-appointment',component:AddAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
