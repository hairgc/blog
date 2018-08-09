import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../../model/post.model';

@Injectable()
export class PostlistService {

  //public postListURL = 'mock-data/postlist-mock.json';
  //public postListSearchURL = 'mock-data/postlist-search-mock.json';
  public postListURL = 'blog/post/queryPostListByPage';
  constructor(public http:HttpClient) { }

  public getPostList(searchText: string,page:number=1,categoryId:number=-1):Observable<Post[]>{
    let url = this.postListURL;
    let params = new HttpParams()
      .set('page',String(page))
      .set('categoryId',String(categoryId))
      .set('searchText',searchText||'');
    return this.http
      .get<Post[]>(url,{params})
  }
}

