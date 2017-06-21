import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "../user/login/login.service";


@Injectable()
export class ManageGuard implements CanActivate {
  constructor(public loginService: LoginService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.hasLogin;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

    if(state.url.startsWith("/manage/visitortable")){
      return this.loginService.permission.includes("visitor:manage")
    }else if(state.url.startsWith("/manage/posttable")){
      return this.loginService.permission.includes("post:manage")
    }else if(state.url.startsWith("/manage/commenttable")){
      return this.loginService.permission.includes("comment:manage")
    }else if(state.url.startsWith("/manage/usertable")){
      return this.loginService.permission.includes("user:manage")
    }
    return false;
  }
}
