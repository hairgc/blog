import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from "../../../home/category/model/category.model";


@Injectable()
export class CategoryTableService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  public categoryListURL = 'blog/category/query';
  public categoryTableURL = 'blog/category/queryByPage';
  public newCategoryURL = 'blog/category/newCategory';
  public editCategoryURL = 'blog/category/editCategory';
  public deleteCategoryURL = 'blog/category/deleteCategory/';
  constructor(private http:HttpClient) { }

  public queryCategory():Observable<Array<Category>>{
    return 	this.http
      .get<Array<Category>>(this.categoryListURL)
  }

  //分页
  public getCategoryTable(pageNum: number,rowNum:number){
    let params = new HttpParams()
      .set('pageNum',String(pageNum))
      .set('rowNum',String(rowNum));

    return this.http.get<any>(this.categoryTableURL,{params})
  }

  public newCategory(category:Category):Observable<any>{
    return this.http
      .post(this.newCategoryURL,JSON.stringify(category), {headers: this.headers})
  }

  public editCategory(category:Category):Observable<any>{
    return this.http
      .post(this.editCategoryURL,JSON.stringify(category), {headers: this.headers})
  }

  public deleteCategory(categoryId:number):Observable<any>{
    return this.http
      .post(this.deleteCategoryURL+categoryId, {headers: this.headers})
  }
}
