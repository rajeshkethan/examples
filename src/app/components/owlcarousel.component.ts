import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
  <!--The content below is only a placeholder and can be replaced.-->

  <owl-carousel [options]="myCarouselOptions" [items]="images" [carouselClasses]="['owl-theme', 'sliding']" >
  <div class="item" *ngFor="let image of myCarouselImages;let i = index">
   <div>
     <img src={{image}}/>
   </div>
  </div>
 </owl-carousel>
  `
})

export class CarouselComponent implements OnInit {

  constructor() { }


  title = 'owl-carousel';
  images: any;

//  mySlideImages = ['../assets/images/subscriptions.jpg','../assets/images/trending.png','../assets/images/trending.png'];
  myCarouselImages = ['../assets/images/trending.png', '../assets/images/subscriptions.jpg','../assets/images/trending.png','../assets/images/trending.png','../assets/images/subscriptions.jpg','../assets/images/subscriptions.jpg'];

  // mySlideOptions = {items: 1, dots: true, nav: false};
  myCarouselOptions = {items: 4, dots: true, nav: false};

  ngOnInit() { }

}
