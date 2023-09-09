import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
@Component({
  selector: 'thryve-disseminate-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  blogchart: any;
  communitychart: any;
  ngOnInit(): void {
    this.blogchart = Highcharts.chart('blog', {
      title: {
        text: ''
      },
      xAxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      yAxis: {
        title: {
          text: 'Activity'
        }
      },
      series: [{
        type: 'line',
        name: 'Blogs',
        data: [10, 15, 12, 18, 20, 16, 22, 25]
      }]
    });
  
  this.communitychart = Highcharts.chart('community', {
    title: {
      text: ''
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    yAxis: {
      title: {
        text: 'Activity'
      }
    },
    series: [{
      type: 'line',
      name: 'Communities',
      data: [7, 15, 22, 8, 37, 16, 29, 25]
    }]
  });
}
  
  }

