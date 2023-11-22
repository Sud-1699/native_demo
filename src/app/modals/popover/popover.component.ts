import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent  implements OnInit {
  public htmlContent: string = ''
  public fileName: string = 'default';
  constructor(
    private navParam: NavParams,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    console.log(this.navParam.data['fileData']);
    // document.getElementById('template-data')!.innerHTML = this.navParam.data['htmlContent'];
  }
}
