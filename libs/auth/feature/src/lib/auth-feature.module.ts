import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthDataAccessModule } from '@thryve-disseminate/auth/data-access';

const routes: Route[] = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthDataAccessModule,
    RouterModule.forChild(routes)],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ],
  exports: [ 
    LoginComponent,
    RegistrationComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
  ]
})
export class AuthFeatureModule {}
