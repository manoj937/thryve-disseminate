import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'thryve-disseminate-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dashboard';
  showHead = false;

  constructor(private router: Router){
    if(sessionStorage.getItem('admin') === 'true' || sessionStorage.getItem('admin') === 'false'){
      router.events.forEach((event) => {
        if (event instanceof NavigationStart || event instanceof NavigationEnd) {
          if (
            event['url'] == '/login' || 
            event['url'] == '/register' || 
            event['url'] == '/forget-password' ||
            event['url'] == '/reset-password' ||
            event['url'] == '/') {
            this.showHead = false;
          } else {
            this.showHead = true;
          }
        }
      });
    } else{
      this.router.navigate(['/login']);
    }
  }

}
