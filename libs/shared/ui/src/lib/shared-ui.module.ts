import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AsideComponent } from './aside/aside.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent,
    AsideComponent,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    AsideComponent,
  ],
})
export class SharedUiModule {}
