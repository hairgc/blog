import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Post} from "../../model/post.model";


@Injectable()
export class WritePostService {
  private headers = new Headers({'Content-Type': 'application/json'});

  public writePostURL = 'blog/post/write';
  public getEditPostURL = "blog/post/getEditPost/";
  public editPostURL = "blog/post/edit";
  constructor(public http:Http) { }

  /**
   * 保存或发布
   * @param post
   * @returns {Observable<R>}
   */
  public writePost(post:Post):Observable<any>{
    return this.http
          .post(this.writePostURL,JSON.stringify(post), {headers: this.headers})
          .map((res: Response) => {
            return res'';
          });
  }

  /**
   * 获取编辑文章
   * @param id
   * @returns {Observable<R>}
   */
  public getEditPost(id:number):Observable<Post>{
    return 	this.http
      .get(this.getEditPostURL+id)
      .map((res: Response) => {
        return res'';
      });
  }

  /**
   * 提交编辑文章
   * @param post
   * @returns {Observable<R>}
   */
  public editPost(post:Post):Observable<any>{
    return this.http
      .post(this.editPostURL,JSON.stringify(post), {headers: this.headers})
      .map((res: Response) => {
        return res'';
      });
  }
}
