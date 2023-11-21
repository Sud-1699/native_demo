import { Component, Input, OnInit } from '@angular/core';
import { NativeService } from 'src/app/services/native.service';
import { OpenOptions } from '@capacitor/browser';
import { AppConstant } from 'src/app/app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() pageTitle: string = "";
  @Input() isDashboard: boolean = true;

  constructor(private nativeService: NativeService) { }

  ngOnInit() {}

  openBrowser() {
    let options: OpenOptions = {
      url: AppConstant.gdprLink.capacitor
    };
    this.nativeService.openBrowser(options);
  }

}
