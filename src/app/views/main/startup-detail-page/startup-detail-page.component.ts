import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-startup-detail-page',
  templateUrl: './startup-detail-page.component.html',
  styleUrls: ['./startup-detail-page.component.css']
})
export class StartupDetailPageComponent {

  startup_id:any;
  detail_data:any;
  founders= ['founder 1', 'founder 2']
  constructor(private singleRoute: ActivatedRoute,
              private tostr: ToastrService,
              private router: RoutingService,
              private api: ServerRequestService
              ){}

  
  ngOnInit(){
    this.getId()
    this.getStartupDetail()
  }

  getId(){
    this.startup_id = this.singleRoute.snapshot.paramMap.get("id")
    console.log(this.startup_id)
  }

  getStartupDetail(){
    this.api.get('startup/' + this.startup_id).subscribe(
      res=>{
        this.detail_data = res;
        console.log(this.detail_data)
      },
      err=>{
        this.tostr.error(err.error.message, "error")
        this.router.route('')
      }
    )
  }

}
