import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, BsDropdownModule.forRoot(),TypeaheadModule.forRoot()],
  declarations: [HeaderComponent, NavbarComponent],
  exports: [HeaderComponent, NavbarComponent]
})
export class SharedUiModule {}
