import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor() { }

  public log(message: string, log?: any) {
    console.log(message, log);
  }

  public warn(message: string, warn?: any) {
    console.warn(message, warn);
  }

  public error(message: string, error?: any) {
    console.error(message, error);
  }

  public debug(message: string, debug?: any) {
    console.debug(message, debug);
  }
}
