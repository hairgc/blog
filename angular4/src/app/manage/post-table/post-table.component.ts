import { Component, OnInit } from '@angular/core';
import {Post} from "../../post/model/post.model";
import {LazyLoadEvent, SelectItem} from "primeng/primeng";
import {PostTableService} from "./services/post-table.service";
import {CategoryTableService} from "app/manage/category-table/services/category-table.service";

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {

  public posts:Post[];
  public totalRecords:number;
  public postTypeOptions:SelectItem[];
  public enableCommentOptions:SelectItem[];
  public statusOptions:SelectItem[];
  public categoryOptions:SelectItem[];
  constructor(public postTableService:PostTableService,
              public categoryTableService:CategoryTableService) {
  }

  ngOnInit() {
    this.postTypeOptions=[
      {label: "原创", value: 0},
      {label: "转载", value: 1},
      {label: "翻译", value: 2}
    ]
    this.enableCommentOptions=[
      {label: "开启评论", value: true},
      {label: "关闭评论", value: false},
    ]
    this.statusOptions=[
      {label: "草稿", value: 0},
      {label: "发布", value: 1},
      {label: "置顶", value: 2},
      {label: "删除", value: 3}
    ]
    this.categoryTableService.queryCategory().subscribe(
      res=>{
        let options=[];
        for(let data of res) {
          let option={label: data.categoryName, value: data}
          options.push(option)
        }
        this.categoryOptions=options;
      },
      error=>console.log(error)
    )
  }

  loadPostsLazy(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network

    this.queryPosts(1+event.first/event.rows,event.rows);
  }

  queryPosts(pageNum:number,rowNum:number){
    this.postTableService.getPostTable(pageNum,rowNum).subscribe(
      res=>{
        this.posts=res.rows;
        this.totalRecords=res.total;
      },
      error=>{},
      ()=>{}
    )
  }

  onCellEditComplete(event){
    console.log(event)
  }

  saveDrop(event){
    console.log(event)
  }
  setStyles(){
    let styles={
      'text-align':'center'
    }
    return styles;
  }

  setEditorStyles(){
    let styles={
      'text-align':'center',
      'overflow':'visible'
    }
    return styles;
  }

}
