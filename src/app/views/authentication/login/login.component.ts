import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/shared/services/helper-service/helper.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service/local-storage.service';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loader=false;
  login_data = {
    "email": "",
    "password": ""
  }

  constructor(private helper: HelperService,
              private api: ServerRequestService,
              private router: RoutingService,
              private storage: LocalStorageService,
              private toastr: ToastrService){}

  ngOnInit(){}

  login(){
    this.loader = true;

    this.api.auth('login/', this.login_data).subscribe(
      res => {
        let response = res
        if(response.status==200){
            console.log(response.data)
            this.storage.saveItemObject('tramtag_user', response.data)
            this.toastr.success(response.message, 'Toastr fun!');
            this.router.route('')
            this.loader=false;
          }
      },
      err=>{
        for( let row of err.error.message){
          console.log(err.error)
          this.toastr.error(row, "error")
          this.loader=false;
        }
      })
    }

}
