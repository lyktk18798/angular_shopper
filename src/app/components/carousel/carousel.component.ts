import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})

export class CarouselComponent implements OnInit {
  constructor() { }
  images = 'assets/images/products/408b9012d99721c97886.jpg';
  ngOnInit() {
  }

}
