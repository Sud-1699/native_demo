import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstant } from '../app.constants';
import { ConsoleService } from './console.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx'

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private serviceName: string = "Util Service::";

  constructor(private router: Router, private consoleService: ConsoleService, private localStorage: NativeStorage) { }

  public navigatePage(path: string) {
    return this.router.navigate([path]);
  }

  public jsonStringify(data: any) {
    return JSON.stringify(data);
  }

  public jsonParse(data: string) {
    return JSON.parse(data);
  }

  public async setItemLocally(key: string, items: any) {
    try {
      this.localStorage.setItem(key, items);
    } catch(error) {
      if(AppConstant.debug) {
        alert(this.serviceName + `Local Storage Error Msg: ` + error);
      }
      this.consoleService.error(this.serviceName + `Local Storage Error Msg: `, error);
    }
  }

  public async getItemLocally(key: string) {
    try {
      return this.localStorage.getItem(key);
    } catch(error) {
      if(AppConstant.debug) {
        alert(this.serviceName + `Local storage error msg: ` + error);
      }
      this.consoleService.error(this.serviceName + `Local storage error msg: `, error);
      return null;
    }
  }
}
