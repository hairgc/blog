import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class LoginService {
  public userLoginURL = 'blog/oauth2-login';

  constructor(public http:Http){}

  public login(){
    return this.http
      .get(this.userLoginURL)
      .map((response: Response) => {
        let user = response.json();
        console.log("user object>"+user);
        return response;
      })
      .subscribe(
        data => {
          console.log("login success>"+data);
        },
        error => {
          console.error(error);
        }
      );
  }
}
