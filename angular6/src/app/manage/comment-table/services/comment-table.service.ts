import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from "../../../comment/model/comment.model";

@Injectable()
export class CommentTableService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  public commentTableURL = 'blog/comment/queryByPage';
  public editCommentURL = 'blog/comment/editComment';
  public querySelectURL="blog/post/querySelect/"
  constructor(private http:HttpClient) { }

  //分页
  public getCommentTable(pageNum: number,rowNum:number,postId:number){
    let params = new HttpParams()
      .set('pageNum',String(pageNum))
      .set('rowNum',String(rowNum));
    if(postId!=null && postId>0){
      params.set("postId",String(postId));
    }
    return this.http.get<any>(this.commentTableURL,{params})
  }

  public editComment(comment:Comment):Observable<any>{
    return this.http
      .post(this.editCommentURL,JSON.stringify(comment), {headers: this.headers})
  }

  //获取文章下拉列表
  public querySelectPost(categoryId: number){
    return this.http.get<any>(this.querySelectURL+categoryId)
  }
}
