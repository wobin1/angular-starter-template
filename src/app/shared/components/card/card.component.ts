import { Component, Input } from '@angular/core';
import { RoutingService } from '../../services/routing-service/routing.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() startup_logo!:string;
  @Input() startup_name!:string;
  @Input() industry!:string;
  @Input() location!:string;
  @Input() founded_in!:string;
  @Input() description!:string;
  @Input() startup_id!:string;
   

  constructor(private router: RoutingService){}

  ngOnInit(){}

  viewDetail(page:string){
    this.router.route(page)
    console.log(page)
  }

}
