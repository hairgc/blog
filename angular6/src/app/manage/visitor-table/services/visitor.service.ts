import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VisitorService {

  public visitorListURL = 'blog/visitor/queryVisitorListByPage';
  constructor(public http:HttpClient) { }

  public getVisitorList(pageNum: number,rowNum:number):Observable<any>{
    let url = this.visitorListURL;
    let params = new HttpParams();
    params.set('pageNum',String(pageNum));
    params.set('rowNum',String(rowNum));
    return this.http
      .get(url,{params})
  }

}
