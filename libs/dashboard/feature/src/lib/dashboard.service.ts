import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private tagKey = new Subject();
getsearchKeyTag = this.tagKey.asObservable();
  constructor() { }
  setsearchKey(key: string){
    this.tagKey.next(key);
  }
}
