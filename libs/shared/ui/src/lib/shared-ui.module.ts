import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AsideComponent } from './aside/aside.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalComponent } from './modal/modal.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MdbModalModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    SidenavComponent,
    AsideComponent,
    ModalComponent,
  ],
  exports: [
    HeaderComponent, 
    SidenavComponent, 
    AsideComponent,
    ModalComponent
  ],
})
export class SharedUiModule {}
