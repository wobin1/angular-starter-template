import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: RoutingService){}

  ngOnInit(){}

  route(page:string){
    this.router.route(page)
  }

}
