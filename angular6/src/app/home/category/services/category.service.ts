import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from "../model/category.model";

@Injectable()
export class CategoryService {

  public categoryListURL = 'blog/category/query';

  constructor(private http:HttpClient) { }

  public queryCategory():Observable<Array<Category>>{
    return 	this.http
      .get<Array<Category>>(this.categoryListURL)
  }
}
