import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {Post} from "../../model/post.model";


@Injectable()
export class PostDetailService {
    public postDetailURL = "blog/post/postdetail/";

    constructor(public http: HttpClient) {
    }

    public getPostDetail(id:number):Observable<Post>{
        return 	this.http
        			.get<Post>(this.postDetailURL+id)
    }
}
