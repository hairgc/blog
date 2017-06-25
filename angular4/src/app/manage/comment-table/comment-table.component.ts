import { Component, OnInit } from '@angular/core';
import { Comment } from "../../comment/model/comment.model";
import {CommentTableService} from "./services/comment-table.service";
import {ToastrService} from "ngx-toastr";
import {LazyLoadEvent, SelectItem} from "primeng/primeng";
import {CategoryTableService} from "../category-table/services/category-table.service";
import {flyIn} from "../../animations/fly-in";
@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.css'],
  animations: [
    flyIn
  ]
})
export class CommentTableComponent implements OnInit {

  public comments:Comment[];
  public totalRecords:number;
  public statusOptions:SelectItem[];
  public categoryOptions:SelectItem[];
  public postOptions:SelectItem[];
  //记录分页信息
  public pageNum:number;
  public rowNum:number;

  public postId:number;
  public categoryId:number;
  constructor(public commentTableService:CommentTableService,
              public categoryTableService:CategoryTableService,
              public toastr: ToastrService) { }

  ngOnInit() {
    this.statusOptions=[
      {label: "删除", value: 0},
      {label: "正常", value: 1},
      {label: "优质", value: 2}
    ];
    this.categoryTableService.queryCategory().subscribe(
      res=>{
        let options=[];
        for(let data of res) {
          let option={label: data.categoryName, value: data.id}
          options.push(option)
        }
        this.categoryOptions=options;
      },
      error=>console.log(error)
    )
  }

  loadCommentsLazy(event: LazyLoadEvent) {
    this.pageNum=1+event.first/event.rows;
    this.rowNum=event.rows
    this.queryComment(this.pageNum,this.rowNum,this.postId);
  }

  queryComment(pageNum:number,rowNum:number,postId:number){
    this.commentTableService.getCommentTable(pageNum,rowNum,postId).subscribe(
      res=>{
        this.comments=res.rows;
        this.totalRecords=res.total;
      },
      error=>{
        this.toastr.error(error.json()["msg"]?error.json()["msg"]:"未知错误",'系统提示');
      },
      ()=>{}
    );
  }

  reloadPost(event){
    this.postOptions=[];
    this.commentTableService.querySelectPost(event.value).subscribe(
      res=>{
        this.postId=null;
        let options=[];
        for(let data of res) {
          let option={label: data.title, value: data.id}
          options.push(option)
        }
        this.postOptions=options;
      },
      error=>console.log(error)
    );
  }

  saveDrop(event){
    this.commentTableService.editComment(event).subscribe(
      res=>{
        if(res&&res.success){
          //修改成功什么也不做
        }else{
          this.toastr.error(res.msg,"系统提示");
          this.queryComment(this.pageNum,this.rowNum,this.postId);
        }
      },
      error=>{
        this.toastr.error(error.json()["msg"]?error.json()["msg"]:"未知错误",'系统提示');
      },
      ()=>{}
    )
  }

  setEditorStyles(){
    let styles={
      'text-align':'center',
      'overflow':'visible'
    }
    return styles;
  }

  setStyles(){
    let styles={
      'text-align':'center'
    }
    return styles;
  }
}
