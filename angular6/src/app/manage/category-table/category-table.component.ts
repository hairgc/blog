import { Component, OnInit } from '@angular/core';
import {Category} from "../../home/category/model/category.model";
import {CategoryTableService} from "./services/category-table.service";
import {ToastrService} from "ngx-toastr";
import {LazyLoadEvent} from "primeng/primeng";
import {flyIn} from "../../animations/fly-in";

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
  animations: [
    flyIn
  ]
})
export class CategoryTableComponent implements OnInit {

  public categories:Category[];
  public selectedCategory:Category;//选中行
  public displayDialog: boolean;
  public category:Category=new Category;
  public newCategory: boolean;
  public totalRecords:number;
  //记录分页信息
  public pageNum:number;
  public rowNum:number;
  constructor(public categoryTableService:CategoryTableService,
              public toastr: ToastrService) { }

  ngOnInit() {
    //this.queryCategory();
  }

  loadCategoriesLazy(event: LazyLoadEvent) {
    this.pageNum=1+event.first/event.rows;
    this.rowNum=event.rows
    this.queryCategory(this.pageNum,this.rowNum);
  }

  queryCategory(pageNum:number,rowNum:number){
    this.categoryTableService.getCategoryTable(pageNum,rowNum).subscribe(
      res=>{
        this.categories=res.rows;
        this.totalRecords=res.total;
      },
      error=>{
        this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示');
      },
      ()=>{}
    );
  }

  delete(){
    this.categoryTableService.deleteCategory(this.category.id).subscribe(
      res=>{
        if(res&&res.success){
          this.toastr.success("删除成功",'系统提示');
          this.queryCategory(this.pageNum,this.rowNum);
        }else {
          this.toastr.error(res["msg"]?res["msg"]:"未知错误",'系统提示');
        }
      },
      error=>{
        this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示');
      },
      ()=>{}
    );
    this.category = null;
    this.displayDialog = false;
  }
  save(){
    if(this.newCategory){
      this.categoryTableService.newCategory(this.category).subscribe(
        res=>{
          if(res&&res.success){
            this.queryCategory(this.pageNum,this.rowNum);
          }else{
            this.toastr.error(res["msg"]?res["msg"]:"未知错误",'系统提示');
          }
        },
        error=>{
          this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示');
        },
        ()=>{}
      );
    }else{
      this.categoryTableService.editCategory(this.category).subscribe(
        res=>{
          if(res&&res.success){
            this.queryCategory(this.pageNum,this.rowNum);
          }else{
            this.toastr.error(res["msg"]?res["msg"]:"未知错误",'系统提示');
          }
        },
        error=>{
          this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示');
        },
        ()=>{}
      );
    }

    this.category = null;
    this.displayDialog = false;
  }

  showDialogToAdd() {
    this.newCategory = true;
    this.category = new Category();
    this.displayDialog = true;
  }

  onRowSelect(event){
    this.newCategory = false;
    this.category = this.cloneCategory(event.data);
    this.displayDialog = true;
  }

  cloneCategory(c: Category): Category {
    let category = new Category();
    for(let prop in c) {
      category[prop] = c[prop];
    }
    return category;
  }

  setStyles(){
    let styles={
      'text-align':'center'
    }
    return styles;
  }
}
