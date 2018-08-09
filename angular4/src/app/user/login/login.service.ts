import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Http, Headers, Response, } from '@angular/http';
import {User} from "../model/user.model";

@Injectable()
export class LoginService {
  public userInfoURL = 'blog/info';

  public userLoginOutURL = 'blog/logout';
  /**
   * 需要监控用户登录状态的地方都可以订阅这个主题
   */
  public subject: Subject<User> = new Subject<User>();

  public hasLogin:boolean=false;

  public user:User=new User();//存储当前用户
  public permission:Array<string>=new Array<string>();//存储用户权限

  constructor(public http:Http){}

  public get currentUser():Observable<User>{
    return this.subject.asObservable();
  }

  /**
   *用于查询用户是否登录，登录返回用户信息
   * @returns {Observable<R>}
   */
  public queryUserInfo():Observable<any>{
    return this.http
      .get(this.userInfoURL)
      .map((res: Response) => {
        let result = res'';
        return result;
      });
  }

  public logout():Observable<any>{
    return this.http
      .get(this.userLoginOutURL)
      .map((res:Response)=>{
        this.hasLogin=false;
        this.user=new User();
        this.permission=new Array<string>();
        window.localStorage.removeItem("currentUser");
        window.localStorage.removeItem("permission");
        this.subject.next(Object.assign({}));
        return res;
      });
  }

  public triggerNextValue(obj:any){
    this.subject.next(Object.assign({},obj));
  }
}
