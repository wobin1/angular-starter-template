import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { RoutingService } from '../routing-service/routing.service';
import { LocalStorageService } from '../local-storage-service/local-storage.service';
import { HelperService } from '../helper-service/helper.service';
import { ToastrService } from 'ngx-toastr';

'@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  token:any;
  constructor(private router: RoutingService,
              private helper: HelperService,
              private toastr: ToastrService,
              ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    // catching errors while checking if token is in browser
    try {
      this.token = this.helper.get_token()
    } catch (error) {
      this.token = false
    }
    
    // checking if user token is stored on browser local storage
    if (this.token) {
      return true;
        } else {
          // routing user to login
          this.router.route('auth/login') 

          // toasting message 
          this.toastr.error("Please login", "Login Required")
          return false;
          }
        }

    
}
