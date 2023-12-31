import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@thryve-disseminate/shared/ui';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthFeatureModule } from '@thryve-disseminate/auth/feature';
import { AuthDataAccessModule } from '@thryve-disseminate/auth/data-access';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CommunityDataAccessModule } from '@thryve-disseminate/community/data-access';
import { BlogsDataAccessModule } from '@thryve-disseminate/blogs/data-access';
import { QaDataAccessModule } from '@thryve-disseminate/qa/data-access';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedUiModule,
    AuthFeatureModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BlogsDataAccessModule.forRoot(environment),
    CommunityDataAccessModule.forRoot(environment),
    AuthDataAccessModule.forRoot(environment),
    QaDataAccessModule.forRoot(environment),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [], 
  bootstrap: [AppComponent],
})
export class AppModule {}
