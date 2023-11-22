import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/modals/popover/popover.component';
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent  implements OnInit {

  @ViewChild('renameFile', { read: ElementRef })
  private renameFileAction!: ElementRef;

  public receiptList: any[] = [];

  constructor(
    private nativeService: NativeService,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}

  public receiptAction(actionType: string) {
    switch (actionType) {
      case 'captureImg':
        this.captureImage();
        break;
      case 'addImg':
        this.getImageFromAlbum();
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
        // this.renameFilePopup(capaturedImage);
    } catch (error) {
      console.error("Capacitor: Native Camera Error Msg ", error);
    }
  }

  private async getImageFromAlbum() {
    try {
      const image = await this.nativeService.getImageFromAlbum();
      if(image)
        this.receiptList.push(image);
    } catch (error) {
      console.error("Capacitor: Native Camera Error Msg ", error);
    }
  }

  private async renameFilePopup(file: unknown | string) {
    const renameFilePopover = await this.popoverCtrl.create({
      component: PopoverComponent,
      translucent: true,
      componentProps: {
        fileData: file,
        htmlContent: `
          <ion-content class="ion-padding">
            <ion-input 
          </ion-content>
        `
      },
    });

    return await renameFilePopover.present();
  }
}
