import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './api/login.service';
import { RegisterService } from './api/register.service';
import { ForgetPasswordService } from './api/forget-password.service';
import { ResetPasswordService } from './api/reset-password.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    LoginService,
    RegisterService,
    ForgetPasswordService,
    ResetPasswordService,
    AuthFacade,
  ],
})
export class AuthDataAccessModule {
  public static forRoot(
    environment: any
  ): ModuleWithProviders<AuthDataAccessModule> {
    return {
      ngModule: AuthDataAccessModule,
      providers: [
        LoginService,
        RegisterService,
        ForgetPasswordService,
        ResetPasswordService,
        {
          provide: 'env',
          useValue: environment,
        },
      ],
    };
  }
}
