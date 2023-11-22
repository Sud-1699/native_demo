import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions} from '@capacitor/camera';
import { Browser, OpenOptions } from '@capacitor/browser';
import { AppConstant } from '../app.constants';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
// import { Capacitor } from '@capacitor/core/types/global';

@Injectable({
  providedIn: 'root'
})
export class NativeService {
  private serviceName: string = "Native Service::";

  constructor() { }

  async getPhoto(options: ImageOptions) {
    try {
      return await Camera.getPhoto(options)
    } catch(error) {
      if(AppConstant.debug) {
        alert(this.serviceName + `Capacitor Native Camera Error Msg: ` + error);
      }
      console.error(this.serviceName + `Capacitor Native Camera Error Msg: `, error);
      return null;
    }
  }

  async capatureImage(): Promise<string | undefined> {
    try {
      console.log("Opening Camera");
      const options: ImageOptions = {
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      };
      const captureImage = await Camera.getPhoto(options);

      return captureImage.webPath;
    } catch(error) {
      console.error("Capacitor: Native Camera Error Msg ", error);
      return undefined;
    }
  }

  async getImageFromAlbum() {
    try {
      console.log("Opening Photos Album");
      const options: ImageOptions = {
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      };
      const captureImage = await Camera.getPhoto(options);

      return captureImage.webPath;
    } catch(error: any) {
      if(error.message === 'User cancelled photos app')
        console.error("Capacitor: " + error.message);
      else 
        console.error("Capacitor: Native Camera Error Msg ", error);
      return undefined;
    }
  }

  async openBrowser(options: OpenOptions) {
    try {
      await Browser.open(options);
    } catch(error) {
      if(AppConstant.debug) {
        alert(this.serviceName + `Capacitor Native Browser Error Msg: ` + error);
      }
      console.error(this.serviceName + `Capacitor Native Browser Error Msg: `, error);
    }
  }

  async checkNetworkAvailability() {
    try {
      return await Network.getStatus();
    } catch(error) {
      if(AppConstant.debug) {
        alert(this.serviceName + `Capacitor Native Network Error Msg: ` + error);
      }
      console.error(this.serviceName + `Capacitor Native Network Error Msg: `, error);
      return null;
    }
  }

  async hasNativePlatform() {
    try {
      return 1;
      // return Capacitor.isNativePlatform();
    } catch(error) {
      return null;
    }
  }
}
