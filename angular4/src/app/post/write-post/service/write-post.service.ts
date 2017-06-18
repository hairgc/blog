import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Post} from "../../model/post.model";


@Injectable()
export class WritePostService {
  private headers = new Headers({'Content-Type': 'application/json'});

  public writePostURL = 'blog/post/newPost';

  constructor(public http:Http) { }

  public newPost(post:Post):Observable<any>{
    return this.http
          .post(this.writePostURL,JSON.stringify(post), {headers: this.headers})
          .map((res: Response) => {
            return res.json();
          });
  }
}
