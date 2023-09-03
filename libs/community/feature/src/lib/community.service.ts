import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  baseUrl = "http://api.thryve-disseminate.com";
  $communityList = new Subject();
  $blogList = new Subject();
  $blogs = new Subject();
  constructor(private http: HttpClient) { }
  getCommunityList(): any{
    this.http.get(`${this.baseUrl}/communities`).subscribe(data => this.$communityList.next(data))
  }
  getBlogList(): any{
    this.http.get(`${this.baseUrl}/blogs`).subscribe(data => this.$blogList.next(data))
  }
}
