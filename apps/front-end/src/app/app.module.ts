import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { SharedUiModule } from '@thryve-disseminate/shared/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedUiModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [], 
  bootstrap: [AppComponent],
})
export class AppModule {}
