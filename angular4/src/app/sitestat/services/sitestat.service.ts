import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class SiteStatService {

  public siteStatURL = 'blog/siteStat';

  constructor(public http:Http) { }

  public getSiteStat():Observable<any>{
    return this.http
      .get(this.siteStatURL)
      .map((res:Response) => {
        return res'';
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
