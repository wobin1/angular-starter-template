import { Component } from '@angular/core';
import { RoutingService } from 'src/app/shared/services/routing-service/routing.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  loader=false;

  constructor(private router: RoutingService){}

  ngOnInit(){}

  recover(page:string){
    this.router.route(page)

  }


}
