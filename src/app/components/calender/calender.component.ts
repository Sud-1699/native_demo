import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent  implements OnInit {

  shutter!: Element | null;

  constructor() { }

  ngOnInit() {
    this.shutter = document.querySelector('.shutter');
  }

  scroll() {
  this.shutter?.addEventListener('click', () => {
    this.shutter?.classList.toggle('open');
    this.shutter?.classList.toggle('close');
  });
  }

  isOpen = false;

  toggleShutter() {
    this.isOpen = !this.isOpen;
  }

}
