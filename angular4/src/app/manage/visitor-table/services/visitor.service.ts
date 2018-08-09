import { Injectable } from '@angular/core';
import { Http,Response,URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VisitorService {

  public visitorListURL = 'blog/visitor/queryVisitorListByPage';
  constructor(public http:Http) { }

  public getVisitorList(pageNum: number,rowNum:number):Observable<any>{
    let url = this.visitorListURL;
    let params = new URLSearchParams();
    params.set('pageNum',String(pageNum));
    params.set('rowNum',String(rowNum));
    return this.http
      .get(url,{search:params})
      .map((res:Response) => {
        let result=res'';
        return result;
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

}
