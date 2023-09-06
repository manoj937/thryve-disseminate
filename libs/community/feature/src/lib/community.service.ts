/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  baseUrl = "https://api.thryve-disseminate.com";
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
  deleteCommunity(id: string){
    this.http.delete<string>(this.baseUrl+"/communities/delete/"+id).subscribe(data => {
      if(data){
        this.getCommunityList();
      }
    })
  }
}
