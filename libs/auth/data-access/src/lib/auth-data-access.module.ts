import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './api/login.service';
import { RegisterService } from './api/register.service';
import { ForgetPasswordService } from './api/forget-password.service';
import { ResetPasswordService } from './api/reset-password.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    LoginService,
    RegisterService,
    ForgetPasswordService,
    ResetPasswordService
  ]
})
export class AuthDataAccessModule {}
