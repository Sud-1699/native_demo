import { Component, OnInit } from '@angular/core';
import { AppConstant } from 'src/app/app.constants';

@Component({
  selector: 'app-my-agenda',
  templateUrl: './my-agenda.page.html',
  styleUrls: ['./my-agenda.page.scss'],
})
export class MyAgendaPage implements OnInit {

  myAgendaTitle: string = "Hello";

  constructor() {
  }

  ngOnInit() {
  }

}
