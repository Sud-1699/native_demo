import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, ImageOptions } from '@capacitor/camera';
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent  implements OnInit {

  receiptList: any[] = [];

  constructor(private nativeServie: NativeService) { }

  ngOnInit() {}

  async addReceipt() {
    try {
      console.log("Opening Camera");
      const options: ImageOptions = {
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      };
      const receipt = await this.nativeServie.getPhoto(options);
      if(receipt !== null) {
        this.receiptList.push(receipt.path);
      }
    } catch(error) {
      console.error("Capacitor: Native Camera Error Msg ", error);
    }
  }
}
