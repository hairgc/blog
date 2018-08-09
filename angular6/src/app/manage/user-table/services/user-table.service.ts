import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "../../../user/model/user.model";

@Injectable()
export class UserTableService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  public userTableURL = 'blog/user/queryByPage';
  public editUserURL = 'blog/user/editUser';
  constructor(private http:HttpClient) { }

  //分页
  public getUserTable(pageNum: number,rowNum:number){
    let params = new HttpParams()
      .set('pageNum',String(pageNum))
      .set('rowNum',String(rowNum));

    return this.http.get(this.userTableURL,{params})
  }

  public editUser(user:User):Observable<any>{
    return this.http
      .post(this.editUserURL,JSON.stringify(user), {headers: this.headers})
  }

  setStyles(){
    let styles={
      'text-align':'center'
    }
    return styles;
  }
}
