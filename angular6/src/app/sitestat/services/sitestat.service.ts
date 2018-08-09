import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class SiteStatService {

  public siteStatURL = 'blog/siteStat';

  constructor(public http:HttpClient) { }

  public getSiteStat():Observable<any>{
    return this.http
      .get(this.siteStatURL)
  }
}
