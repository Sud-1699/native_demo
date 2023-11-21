import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register(); //register from swiperjs

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
