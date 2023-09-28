import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage-service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private storage: LocalStorageService) { }

  getSchoolId(){
    let stored_data = this.storage.getStoredData('ischoolUser')
    console.log(stored_data)

    return stored_data.data.id
  }


}
