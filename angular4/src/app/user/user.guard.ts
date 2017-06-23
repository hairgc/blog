import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "../user/login/login.service";


@Injectable()
export class UserGuard implements CanActivate {
  constructor(public loginService: LoginService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if(this.loginService.hasLogin){
      if(state.url.startsWith("/user/write")){
        return this.loginService.permission.includes("post:add")
      }else if(state.url.startsWith("/user/editpost")){
        return this.loginService.permission.includes("post:update")
      }
    }else{
      return false;
    }
    return false;
  }
}
