import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VerifiedStartupsComponent } from './verified-startups/verified-startups.component';
import { StartupDetailPageComponent } from './startup-detail-page/startup-detail-page.component';
import { RegistrationComponent } from '../authentication/registration/registration.component';
import { AuthGaurdService } from 'src/app/shared/services/authGuard-service/auth-gaurd.service';
import { StartupRegistrationComponent } from './startup-registration/startup-registration.component';

const routes: Routes = [
  {path: "", component: HomeComponent, canActivate: [AuthGaurdService]},
  {path: "verified-startups", component: VerifiedStartupsComponent},
  {path: "startup/:id", component: StartupDetailPageComponent},
  {path: "register-startup", component: StartupRegistrationComponent, canActivate: [AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
