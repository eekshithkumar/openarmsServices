import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { CustomerService } from './customer.service';

/*
@Injectable({providedIn:'root'})
export class AuthGuard {
  constructor(private service: EmpService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.service.getUserLoggedStatus();
  }  
}
*/


export const authGuard: CanActivateFn = (route, state) => {
  //Dependency Injection
  let service = inject(CustomerService);
  return service.getUserLoggedStatus();
};