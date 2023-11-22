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

  constructor(private nativeService: NativeService) { }

  ngOnInit() {}

  public receiptAction(actionType: string) {
    switch (actionType) {
      case 'captureImg':
        this.captureImage();
        break;
      case 'addImg':

        break;
      case 'addDoc':

        break;
      default:
        break;
    }
  }

  public viewImage(receiptPath: string) {
    window.open(receiptPath, '_blank');
  }

  public deleteReciept(receiptPath: string) {
    this.receiptList.splice(this.receiptList.indexOf(receiptPath), 1); 
  }

  private async captureImage() {
    /* try {
      console.log("Opening Camera");
      const options: ImageOptions = {
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      };
      const receipt = await this.nativeService.getPhoto(options);
      if(receipt !== null) {
        this.receiptList.push(receipt.path);
      }
    } catch(error) {
      console.error("Capacitor: Native Camera Error Msg ", error);
    } */

    try {
      const capaturedImage = await this.nativeService.capatureImage();
      if(capaturedImage)
        this.receiptList.push(capaturedImage); 
    } catch (error) {
      console.error("Capacitor: Native Camera Error Msg ", error);
    }
  }
}
