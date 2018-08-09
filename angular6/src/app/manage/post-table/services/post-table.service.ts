import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from "../../../post/model/post.model";

@Injectable()
export class PostTableService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  public toEditURL: string = "blog/post/attributeModification";
  public dataUrl:string = "blog/post/queryPostByUserId";

  constructor(public http: HttpClient) { }

  public getPostTable(pageNum: number,rowNum:number){
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let params = new HttpParams()
      .set('pageNum',String(pageNum))
      .set('rowNum',String(rowNum));

    return this.http.get(this.dataUrl+"/"+currentUser['id'],{params})
  }

  public attributeModification(post:Post):Observable<any>{
    return this.http
      .post(this.toEditURL,JSON.stringify(post), {headers: this.headers})
  }
}
