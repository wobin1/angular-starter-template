import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent {
  @Input() detail_title!:string;
  @Input() description!:string;
  @Input() industry!:string;
  @Input() location!:string;
  @Input() founders:any;
  @Input() founded_in!:string;
  @Input() company_website!:string;
  @Input() company_phone_number!:string;
  @Input() company_email!:string;
  @Input() company_linkedin!:string;
  @Input() company_aditional_info!: [];

}
