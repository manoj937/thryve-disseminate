import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thryve-disseminate-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  
  admin!: string | null;

  ngOnInit() {
    this.admin = sessionStorage.getItem('admin');
  }
}
