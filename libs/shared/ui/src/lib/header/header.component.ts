import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {Subject, fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { BlogsFacade } from '@thryve-disseminate/blogs/data-access';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { QaFacade } from '@thryve-disseminate/qa/data-access';
import { DashboardService } from 'libs/dashboard/feature/src/lib/dashboard.service';
@Component({
  selector: 'thryve-disseminate-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  Math = Math;
  selectedState: string = '';
  navigations = sessionStorage.getItem('admin') === 'true' ? ['Dashboard', 'Community'] : ['Dashboard', 'Community', 'Activity'];
  searchValue = new Subject<string>();
  url = '';
  constructor(public blogsDetails: BlogsFacade, private router: Router,public qaDetails: QaFacade,
    private dashboardService: DashboardService,
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
      this.dashboardService.getsearchKeyTag.subscribe((tag: any) => {
        this.selectedState = tag;
        sessionStorage.setItem('searchKey', tag)
        if(this.url.includes('community/qa')){
          this.qaDetails.initLoadSearchQa( tag.replace('#',''))
        } else {
          this.blogsDetails.initLoadSearchBlogs( tag.replace('#',''));
        }
        this.routeTo();
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
