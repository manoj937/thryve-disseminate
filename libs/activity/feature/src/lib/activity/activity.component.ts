import { Component, OnInit } from '@angular/core';

import * as Highcharts from "highcharts";
@Component({
  selector: 'thryve-disseminate-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  levels = [
    {id: 1, value: 'Amateur', note: "Begginer has started just dive to disseminate", class: "amateur"},
    {id: 2, value: 'Rookie', note: "Began to learn and stepped in exploring", class: "rookie"},
    {id: 4, value: 'Veteran',  note: "Posts questions & rarely answers", class: "veteran"},
    {id: 5, value: 'Enthusiast',  note: "Post Blogs, Post Questions occasionaly", class: "enthusiast"},
    {id: 6, value: 'Proficient',  note: "Post Blogs, Answers Questions, Post Questions atleast once a week", class: "proficient"},
    {id: 7, value: 'Legend',  note: "Post Blogs, Answers Questions, Post Questions atleast every day", class: "legand"}
  ].reverse();
  chart: any;

  ngOnInit(): void {
  this.chart = Highcharts.chart('container', {
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
    }, {
      type: 'line',
      name: 'Q&A',
      data: [5, 8, 7, 9, 10, 12, 11]
    }]
  });
  }
}
