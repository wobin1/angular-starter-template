import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/shared/services/helper-service/helper.service';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  loader=false;
  registration_data = {
    "first_name": "",
    "last_name": "",
    "email": "",
    "phone_number": "",
    "password": "",
    "confirm_password": ""
  }
  constructor(private router: RoutingService, 
                private api: ServerRequestService,
                private toastr: ToastrService,
                private helper: HelperService){}

  ngOnInit(){}

  register(page:string){
    this.loader = true;

    this.api.auth('users/', this.registration_data).subscribe(
      res => {
        let response = res
        if(response.status==200){
            this.toastr.success(response.message, 'Success');
            this.router.route(page)
            this.loader=false;
          }
      },
      err=>{
        console.log(err)
        Object.keys(err.error).forEach(key => {
          this.toastr.error(`${key}: ${err.error[key]}`, "error")
        });
        this.loader=false;
      })
    }

}
