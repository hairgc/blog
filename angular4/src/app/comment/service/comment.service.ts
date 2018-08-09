import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/comment/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Comment} from "../model/comment.model";

@Injectable()
export class CommentService {
  private headers = new Headers({'Content-Type': 'application/json'});
  public commentListURL = 'blog/comment';
  public newCommentURL = 'blog/comment/newComment';
  public deleteCommentURL = 'blog/comment/deleteComment';
  constructor(public http: Http) { }

  public getCommentList(postId: number,pageNum:number):Observable<Comment[]>{
      return this.http.get(this.commentListURL+"/"+postId+"/"+pageNum)
          .map((res: Response) => {
            let result=res'';
            return result;
          });
  }
  public newComment(comment:Comment):Observable<any>{
      return this.http
        .post(this.newCommentURL,JSON.stringify(comment), {headers: this.headers})
        .map((res: Response) => {
          let result = res'';
          return result;
        });
  }
  public deleteComment(comment:Comment):Observable<any>{
    return this.http
      .post(this.deleteCommentURL,JSON.stringify(comment), {headers: this.headers})
      .map((res: Response) => {
        let result = res'';
        return result;
      });
  }
}
