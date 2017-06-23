import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Post} from "app/post/model/post.model";

@Injectable()
export class PostTableService {

  private headers = new Headers({'Content-Type': 'application/json'});
  public toEditURL: string = "blog/post/attributeModification";
  public dataUrl:string = "blog/post/queryPostByUserId";

  constructor(public http: Http) { }

  public getPostTable(pageNum: number,rowNum:number){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let params = new URLSearchParams();
    params.set('pageNum',String(pageNum));
    params.set('rowNum',String(rowNum));

    return this.http.get(this.dataUrl+"/"+currentUser['id'],{search:params})
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public attributeModification(post:Post):Observable<any>{
    return this.http
      .post(this.toEditURL,JSON.stringify(post), {headers: this.headers})
      .map((res: Response) => {
        return res.json();
      });
  }
}
