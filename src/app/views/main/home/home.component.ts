import { Component } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  startups_data:any;
  constructor(private router: RoutingService,
              private api: ServerRequestService,
              ){}

  ngOnInit(){
    this.getStartups()
  }

  getStartups(){
    this.api.get('startups').subscribe(
      res=>{
        this.startups_data = res;
      },
      err=>{
        console.log(err)
      }
    )
  }

  viewDetail(page:string){
    this.router.route(page)
  }

}
