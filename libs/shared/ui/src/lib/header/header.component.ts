import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Subject, fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'thryve-disseminate-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  Math = Math;
  selectedState!: string;
  states: string[] = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado',
  'Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois',
  'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
  'Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Dakota','North Carolina','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  navigations = sessionStorage.getItem('admin') === 'true' ? ['Dashboard', 'Community'] : ['Dashboard', 'Community', 'Explore', 'Activity'];
  searchValue = new Subject<string>();
  constructor() {
    this.searchValue.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        console.log(value);
        //dispatch the action here
      });
  }

}
