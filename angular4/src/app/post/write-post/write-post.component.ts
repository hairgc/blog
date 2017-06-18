import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import {Post} from "../model/post.model";
import {CategoryService} from "../../home/category/services/category.service";
import {WritePostService} from "./service/write-post.service";
import {Category} from "../../home/category/model/category.model";




@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit,AfterViewInit {

  public post:Post = new Post();
  public canSave:boolean=true;
  public firstSubmit:boolean=true;
  public editor:any;
  public categories:Array<Category>;
  constructor(private elementRef: ElementRef,
              public categoryService:CategoryService,
              public writePostService:WritePostService,
              public router: Router,
              public toastr: ToastrService) { }

  @ViewChild('lgModal') public lgModal:ModalDirective;

  ngOnInit() {
    this.queryCategory();
  }
  ngAfterViewInit(): void {
    let that=this;
    that.editor = editormd("editormd", {
      path : "../assets/editormd/lib/", // Autoload modules mode, codemirror, marked... dependents libs path
      height : 500,
      delay:500,
      //height:$(window)-200,
      flowChart : true,             // 开启流程图支持，默认关闭
      sequenceDiagram : true,
      toolbarIcons : function() {
        // Or return editormd.toolbarModes[name]; // full, simple, mini
        // Using "||" set icons align right.
        return ["undo", "redo", "|", "bold", "hr","quote", "|","image","code","code-block","table","|","link", "reference-link",
          "|" ,"list-ul", "list-ol","html-entities","|","preview", "watch","||","setting"]
      },
      toolbarIconsClass : {
        setting : "fa fa-cog"  // 指定一个FontAawsome的图标类
      },
      // 自定义工具栏按钮的事件处理
      toolbarHandlers : {
        setting : function(cm, icon, cursor, selection) {
          that.lgModal.show();
        }
      },
      lang : {
        toolbar : {
          setting : "文章设置"
        }
      },
      codeFold : true,
      imageUpload: true,
      imageUploadURL : "./blog/picture/upload",
      editorTheme:"mdn-like",
      onchange : function() {
        if(!that.canSave){
          that.canSave=true;
        }
        that.post.postContent=that.editor.getMarkdown();
      }
    });


  }
  public save(){
    this.firstSubmit=false;
    if(!this.post.postType || !this.post.category.id){
      this.lgModal.show();
    }else {
      this.post.status=0;
      this.writePostService.newPost(this.post)
        .subscribe(
          res=>{
            if(res&&res.success){
              this.post.id=res.msg;
              this.toastr.success("保存成功","系统提示");
            }else{
              this.toastr.error(res.msg,"系统提示");
            }
          },
          error=>{},
          ()=>{}
        );
    }
  }

  public publish(){
    this.firstSubmit=false;
    if(!this.post.postType || !this.post.category.id){
      this.lgModal.show();
    }else {
      this.post.status=1;
      this.writePostService.newPost(this.post)
        .subscribe(
          res=>{
            if(res&&res.success){
              this.router.navigate(['/posts/page'],{queryParams:{categoryId:-1,page:1}});
            }else{
              this.toastr.error(res.msg,"系统提示");
            }
          },
          error=>{},
          ()=>{}
        );
    }
  }

  public queryCategory(){
    this.categoryService
      .queryCategory()
      .subscribe(
        data => this.categories = data,
        error => console.error(error)
      )
  }

}
