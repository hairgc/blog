import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Post} from "../../model/post.model";


@Injectable()
export class PostDetailService {
    public postDetailURL = "blog/post/postdetail/";

    constructor(public http: Http) {
    }

    public getPostDetail(id:number):Observable<Post>{
        return 	this.http
        			.get(this.postDetailURL+id)
                	.map((res: Response) => {
                		return res'';
                	});
    }
}
