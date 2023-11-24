import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/modals/popover/popover.component';
import { FileService } from 'src/app/services/file.service';
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
    private popoverCtrl: PopoverController,
    private fileService: FileService
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
        this.pickFile();
        break;
      default:
        break;
    }
  }

  public viewFile(receipt: { name: string, file: string }) {
    if(receipt === null) throw new Error('Receipt not found');
    window.open(receipt.file, '_blank');
  }

  public deleteReciept(receiptPath: string) {
    this.receiptList.splice(this.receiptList.indexOf(receiptPath), 1); 
  }

  public onFileSelected(event: any) {
    console.log(`Selected file via input tag: `, event);
    const input = event.target as HTMLInputElement;
    if(input === null || input.files === null) throw new Error('File not uploaded');

    const file = input.files.item(0);
    if(file === null) throw new Error('File does not exit');

    console.log(`Selected file via input tag: file data: `, file);
    const fileReader = new FileReader();
    fileReader.onload = async () => {
      console.log(`Selected file via input tag: fileReader data: `, fileReader.result);
      this.receiptList.push(this.getReceiptObject(file.name, fileReader.result as string));
    }
    fileReader.readAsDataURL(file);
  }

  private async captureImage() {
    try {
      const capaturedImage = await this.nativeService.capatureImage();
      if(capaturedImage) {
        this.receiptList.push(this.getReceiptObject(capaturedImage.split('/')[3], capaturedImage)); 
        // this.renameFilePopup(capaturedImage);
      }
    } catch (error) {
      console.error("Capacitor: Native Camera Error Msg ", error);
    }
  }

  private async getImageFromAlbum() {
    try {
      const image = await this.nativeService.getImageFromAlbum();
      if(image) {
        this.receiptList.push(this.getReceiptObject(image.split('/')[3], image));
      }
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

  private async pickFile() {
    try {
      const result = await this.fileService.pickFileFromManager();
      console.log(`Selected file via capacitor file picker plugin: `, result);
    } catch (error) {
      console.error("Capacitor: Native File Picker Error Msg ", error);
    }
  }

  private getReceiptObject(name: string, file: string) {
    const receiptObj = {
      name: name,
      file: file,
    }

    return receiptObj
  }
}
