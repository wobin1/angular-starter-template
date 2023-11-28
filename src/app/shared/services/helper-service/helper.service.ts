import { Injectable } from '@angular/core';
import { LocalStorageService } from '../local-storage-service/local-storage.service';
import { ServerRequestService } from '../server-request-service/server-request.service';
import { ToastrService } from 'ngx-toastr';
import { RoutingService } from '../routing-service/routing.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  server_response:any;

  constructor(private storage: LocalStorageService, 
                private router: RoutingService, 
                private api: ServerRequestService,
                private toastr: ToastrService) { }

  get_user_id(){
    let stored_data = this.storage.getStoredData('tramtag_user')

    return stored_data.user_id
  }
  get_token(){
    let stored_data = this.storage.getStoredData('tramtag_user')

    return stored_data.tokens.access_token
  }

  // this code is handling the authentication post requests
  auth_post(uri:string, request_data:object){
    this.api.auth(uri, request_data).subscribe(
      res => {
        let response = res
        if(response.status==200){
            this.toastr.success(response.message, 'Toastr fun!');
            this.router.route('')
          }
          this.server_response = "success"
          
      },
      err=>{
        for( let row of err.error.message){
          console.log(err.error)
          this.toastr.error(row, "error")
        }

        this.server_response = "failed"
      }
    )
    return this.server_response
  }


}
