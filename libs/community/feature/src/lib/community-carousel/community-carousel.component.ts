import { Component } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
@Component({
  selector: 'thryve-disseminate-community-carousel',
  templateUrl: './community-carousel.component.html',
  styleUrls: ['./community-carousel.component.scss'],
})
export class CommunityCarouselComponent {
  activeSlides?: SlidesOutputData;
  dynamicSlides = [
    {
      id: '1',
      src:'assets/thumb3.jpg',
      alt:'Community 1',
      title:'Community 1'
    },
    {
      id: '2',
      src:'assets/thumb1.jpg',
      alt:'Community 2',
      title:'Community 2'
    },
    {
      id: '3',
      src:'assets/thumb2.jpg',
      alt:'Community 3',
      title:'Community 3'
    },
    {
      id: '4',
      src:'assets/thumb3.jpg',
      alt:'Community 4',
      title:'Community 4'
    },
    {
      id: '5',
      src:'assets/thumb1.jpg',
      alt:'Community 5',
      title:'Community titleeee 5'
    },
    {
      id: '6',
      src:'assets/thumb2.jpg',
      alt:'Community 4',
      title:'Community 6'
    },
    {
      id: '7',
      src:'assets/thumb3.jpg',
      alt:'Community 5',
      title:'Community 7'
    },
    {
      id: '8',
      src:'assets/thumb1.jpg',
      alt:'Community 4',
      title:'Community 8'
    },
    {
      id: '9',
      src:'assets/thumb2.jpg',
      alt:'Community 5',
      title:'Community 9'
    },

  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    items: 3,
   
    nav: false,
  }
  getCommunity(community: Object){
    console.log(community)

  }
}


