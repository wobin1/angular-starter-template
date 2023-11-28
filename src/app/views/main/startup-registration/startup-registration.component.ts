import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/shared/services/helper-service/helper.service';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-startup-registration',
  templateUrl: './startup-registration.component.html',
  styleUrls: ['./startup-registration.component.css']
})
export class StartupRegistrationComponent {

  loader=false;
  stage:number= 1;
  founder_list:any=[];
  aditional_info_list=[];
  info1="";
  info2="";
  info3="";
  question1="Describe your product or service & the problem it's solving";
  question2="How did you come up with and validate your startup idea? Tell us the story!";
  question3="How is your startup funded";

  startup_registration_data = {
    "startup_name": "",
    "startup_email": "",
    "startup_location": "",
    "startup_industry": "",
    "startup_description": "",
    "founded_in": "",
    "founder": "",
    "additional_info": [{question1: this.info1, question2:this.info2, question3:this.info3}]  
}
  constructor(private router: RoutingService, 
                private api: ServerRequestService,
                private toastr: ToastrService,
                private helper: HelperService){}

  ngOnInit(){}

  // this code add founder to the array of founders
  addToFounder(){
    this.founder_list.push(this.startup_registration_data.founder)
    this.startup_registration_data.founder = ""
  }

  // this code take user to the next stage of startup registration
  nextStage(){
    this.stage = this.stage + 1;
  }

  // this code makes an api call to register a startup.
  register(page:string){
    this.loader = true;

    // assigning the foundlist to founder
    this.startup_registration_data.founder = this.founder_list

    console.log(this.startup_registration_data)

    // this.api.auth('startup/', this.startup_registration_data).subscribe(
    //   res => {
    //     let response = res
    //     if(response.status==200){
    //         this.toastr.success(response.message, 'Success');
    //         this.router.route(page)
    //         this.loader=false;
    //       }
    //   },
    //   err=>{
    //     console.log(err)
    //     Object.keys(err.error).forEach(key => {
    //       this.toastr.error(`${key}: ${err.error[key]}`, "error")
    //     });
    //     this.loader=false;
    //   })

    this.loader = false;
    }

    
}
