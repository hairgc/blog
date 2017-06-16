import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { SITE_HOST_URL } from '../../../shared/config/env.config';
import { Category } from "../model/category.model";

@Injectable()
export class CategoryService {

  constructor(private http:Http) { }

  public queryCategory():Observable<Array<Category>>{
    return 	this.http
      .get(SITE_HOST_URL+'category-mock.json')
      .map((res: Response) => res.json());
  }
}
