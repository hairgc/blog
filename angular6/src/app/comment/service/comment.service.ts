import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';

import {Comment} from "../model/comment.model";

@Injectable()
export class CommentService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  public commentListURL = 'blog/comment';
  public newCommentURL = 'blog/comment/newComment';
  public deleteCommentURL = 'blog/comment/deleteComment';
  constructor(public http: HttpClient) { }

  public getCommentList(postId: number,pageNum:number):Observable<Comment[]>{
      return this.http.get<Comment[]>(this.commentListURL+"/"+postId+"/"+pageNum)
  }
  public newComment(comment:Comment):Observable<any>{
      return this.http
        .post(this.newCommentURL,JSON.stringify(comment), {headers:this.headers})
      
  }
  public deleteComment(comment:Comment):Observable<any>{
    return this.http
      .post(this.deleteCommentURL,JSON.stringify(comment), {headers: this.headers})
  }
}
