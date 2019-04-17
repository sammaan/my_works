import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {SignUpComponent} from './sign-up/sign-up.component';



const routes: Routes = [
    { path : '', component: LoginComponent },
    { path : 'dashboard', component: DashboardComponent },
    { path: 'forgot', component: ForgotPasswordComponent },
    { path: 'signup', component: SignUpComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
