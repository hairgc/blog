import {Component, OnInit, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
import {ActivatedRoute, Router, RouterState, RouterStateSnapshot} from "@angular/router";
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
  public editable:boolean=false;//是否修改
  public categories:Array<Category>;
  constructor(public categoryService:CategoryService,
              public writePostService:WritePostService,
              public router: Router,
              public activatedRoute: ActivatedRoute,
              public toastr: ToastrService) { }

  @ViewChild('lgModal') public lgModal:ModalDirective;

  ngOnInit() {
    this.queryCategory();

    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
    //如果是从编辑这个URL进入，则查询文章，否则什么都不做
    if (routerStateSnapshot.url.indexOf("/user/editpost") != -1) {
      this.editable=true;
      this.activatedRoute.params.subscribe(
        params =>{
          this.getEditPost(params["postId"]);
        }
      );
    }else{
      this.editable=false;
      this.post.postContent=`“永远年轻，永远热泪盈眶”

当你试图放弃一个你知道是正确的事情的时候,希望你能再看看这句话。

——《我的奋斗》


面对挫折、不要愤怒、不要抗议，

只管埋头默默擦亮你的武器，准备下一次的战斗。

我们是做事的，不是要给人家看某种表情的。

——《我的奋斗》`
    }
  }
  ngAfterViewInit(): void {
    let that=this;
    that.editor = editormd("editormd", {
      path : "../assets/editormd/lib/", // Autoload modules mode, codemirror, marked... dependents libs path
      height :700,
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
      this.writePostService.writePost(this.post)
        .subscribe(
          res=>{
            if(res&&res.success){
              this.post.id=res.msg;
              this.toastr.success("保存成功","系统提示");
            }else{
              this.toastr.error(res.msg,"系统提示");
            }
          },
          error=>{this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示');},
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
      this.writePostService.writePost(this.post)
        .subscribe(
          res=>{
            if(res&&res.success){
              this.router.navigate(['/posts/page'],{queryParams:{categoryId:-1,page:1}});
            }else{
              this.toastr.error(res.msg,"系统提示");
            }
          },
          error=>{this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示');},
          ()=>{}
        );
    }
  }

  public saveEdit(){
    this.firstSubmit=false;
    this.writePostService.editPost(this.post)
      .subscribe(
        res=>{
          if(res&&res.success){
            this.toastr.success("保存成功","系统提示");
          }else{
            this.toastr.error(res.msg,"系统提示");
          }
        },
        error=>{this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示');},
        ()=>{}
      );
  }

  //查询所要修改的文章
  public getEditPost(id:number){
    this.writePostService
      .getEditPost(id)
      .subscribe(
        data => {
          this.post = data;
        },
        error => this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示')
      );
  }

  public queryCategory(){
    this.categoryService
      .queryCategory()
      .subscribe(
        data => this.categories = data,
        error => this.toastr.error(error["msg"]?error["msg"]:"未知错误",'系统提示')
      )
  }

}
