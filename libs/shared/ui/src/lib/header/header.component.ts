import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Subject, fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { QaFacade } from '@thryve-disseminate/qa/data-access';

@Component({
  selector: 'thryve-disseminate-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  Math = Math;
  selectedState: string = '';
  states: string[] = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado',
  'Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois',
  'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine',
  'Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Dakota','North Carolina','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont',
  'Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
  navigations = sessionStorage.getItem('admin') === 'true' ? ['Dashboard', 'Community'] : ['Dashboard', 'Community', 'Activity'];
  searchValue = new Subject<string>();
  url = '';
  constructor(public blogsDetails: BlogsFacade, private router: Router,public qaDetails: QaFacade,
    private route:ActivatedRoute) {
      const searchkey = sessionStorage.getItem('searchKey');
      if(!!searchkey){
        this.selectedState = searchkey;
      }
      this.router.events.subscribe(
        (event: any) => {
          if (event instanceof NavigationEnd) {
            this.url = this.router.url
            console.log('this.router.url', this.router.url);
          }
        }
      );
      this.blogsDetails.initLoadBlogs();
    this.searchValue.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        console.log(value);
        if(value){
          if(this.url.includes('community/qa')){
            this.qaDetails.initLoadSearchQa(value)
          } else {
            this.blogsDetails.initLoadSearchBlogs(value);
          }
        } else{
          if(this.url.includes('community/qa')){
            this.qaDetails.initLoadQa()
          } else {
            this.blogsDetails.initLoadBlogs();
          }
        }
      });
  }
  routeTo(){
    if(this.url.includes('community/qa') || this.url.includes('community/blogs')){
      console.log(this.url, this.router.url)
      //todo
    } else {
      this.router.navigate(['/community/blogs']);
    }
  }
  updateSearchValue(event: string){
    console.log(event)
    sessionStorage.setItem('searchKey', event)
    this.searchValue.next(event)
  }

}
