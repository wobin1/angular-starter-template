import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { VerifiedStartupsComponent } from './verified-startups/verified-startups.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StartupDetailPageComponent } from './startup-detail-page/startup-detail-page.component';
import { StartupRegistrationComponent } from './startup-registration/startup-registration.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    VerifiedStartupsComponent,
    StartupDetailPageComponent,
    StartupRegistrationComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MainModule { }
