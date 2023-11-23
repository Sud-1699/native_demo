import { Injectable } from '@angular/core';
import { NativeService } from './native.service';
import { FilePicker, PickFilesOptions, PickFilesResult } from '@capawesome/capacitor-file-picker';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private nativeService: NativeService,
  ) { }

  public async pickFileFromManager(): Promise<PickFilesResult | undefined> {
    try {
      const filePickOption: PickFilesOptions = {
        types: ['*/*'],
        multiple: false
      };
      const result = await FilePicker.pickFiles(filePickOption);

      return result;
    } catch (error) {
      return undefined;
    }
  }
}
