import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Category} from "../../../home/category/model/category.model";


@Injectable()
export class CategoryTableService {

  private headers = new Headers({'Content-Type': 'application/json'});
  public categoryListURL = 'blog/category/query';
  public categoryTableURL = 'blog/category/queryByPage';
  public newCategoryURL = 'blog/category/newCategory';
  public editCategoryURL = 'blog/category/editCategory';
  public deleteCategoryURL = 'blog/category/deleteCategory/';
  constructor(private http:Http) { }

  public queryCategory():Observable<Array<Category>>{
    return 	this.http
      .get(this.categoryListURL)
      .map((res: Response) => res'')
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  //分页
  public getCategoryTable(pageNum: number,rowNum:number){
    let params = new URLSearchParams();
    params.set('pageNum',String(pageNum));
    params.set('rowNum',String(rowNum));

    return this.http.get(this.categoryTableURL,{search:params})
      .map((res:Response) => res'')
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public newCategory(category:Category):Observable<any>{
    return this.http
      .post(this.newCategoryURL,JSON.stringify(category), {headers: this.headers})
      .map((res: Response) => {
        return res'';
      });
  }

  public editCategory(category:Category):Observable<any>{
    return this.http
      .post(this.editCategoryURL,JSON.stringify(category), {headers: this.headers})
      .map((res: Response) => {
        return res'';
      });
  }

  public deleteCategory(categoryId:number):Observable<any>{
    return this.http
      .post(this.deleteCategoryURL+categoryId, {headers: this.headers})
      .map((res: Response) => {
        return res'';
      });
  }
}
