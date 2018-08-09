import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Comment } from "../../../comment/model/comment.model";

@Injectable()
export class CommentTableService {

  private headers = new Headers({'Content-Type': 'application/json'});
  public commentTableURL = 'blog/comment/queryByPage';
  public editCommentURL = 'blog/comment/editComment';
  public querySelectURL="blog/post/querySelect/"
  constructor(private http:Http) { }

  //分页
  public getCommentTable(pageNum: number,rowNum:number,postId:number){
    let params = new URLSearchParams();
    params.set('pageNum',String(pageNum));
    params.set('rowNum',String(rowNum));
    if(postId!=null && postId>0){
      params.set("postId",String(postId));
    }
    return this.http.get(this.commentTableURL,{search:params})
      .map((res:Response) => res'')
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public editComment(comment:Comment):Observable<any>{
    return this.http
      .post(this.editCommentURL,JSON.stringify(comment), {headers: this.headers})
      .map((res: Response) => {
        return res'';
      });
  }

  //获取文章下拉列表
  public querySelectPost(categoryId: number){
    return this.http.get(this.querySelectURL+categoryId)
      .map((res:Response) => res'')
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }
}
