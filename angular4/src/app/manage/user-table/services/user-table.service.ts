import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {User} from "../../../user/model/user.model";

@Injectable()
export class UserTableService {
  private headers = new Headers({'Content-Type': 'application/json'});
  public userTableURL = 'blog/user/queryByPage';
  public editUserURL = 'blog/user/editUser';
  constructor(private http:Http) { }

  //分页
  public getUserTable(pageNum: number,rowNum:number){
    let params = new URLSearchParams();
    params.set('pageNum',String(pageNum));
    params.set('rowNum',String(rowNum));

    return this.http.get(this.userTableURL,{search:params})
      .map((res:Response) => res'')
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public editUser(user:User):Observable<any>{
    return this.http
      .post(this.editUserURL,JSON.stringify(user), {headers: this.headers})
      .map((res: Response) => {
        return res'';
      });
  }

  setStyles(){
    let styles={
      'text-align':'center'
    }
    return styles;
  }
}
