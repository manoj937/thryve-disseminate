import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@thryve-disseminate/shared/ui';
import { AuthFeatureModule } from '@thryve-disseminate/auth/feature';
import { AuthDataAccessModule } from '@thryve-disseminate/auth/data-access';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedUiModule,
    AuthFeatureModule,
    AuthDataAccessModule.forRoot(environment),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [], 
  bootstrap: [AppComponent],
})
export class AppModule {}
