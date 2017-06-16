import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Post} from "../model/post.model";
import {ActivatedRoute, Router,Params} from "@angular/router";
import {PostlistService} from "./services/postlist.service";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public maxSize:number = 5;
  public totalItems:number = 175;
  public currentPage:number = 1;
  public numPages:number = 0;

  public searchText:string;
  public searchTextStream:Subject<string> = new Subject<string>();

  public postList:Array<Post>;
  public categoryId:number;

  constructor(public router: Router,
              public activeRoute: ActivatedRoute,
              public postService:PostlistService) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      this.activeRoute.queryParams.subscribe(params=>{
        this.categoryId=params.categoryId;
        console.log("categoryId:"+this.categoryId);
      })
      // 这里可以从路由里面获取URL参数
      this.currentPage=params.page;
      console.log("currentPage:"+this.currentPage);

      this.loadData(this.searchText,this.currentPage);
    });



    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        this.loadData(this.searchText,this.currentPage)
      });
  }

  public loadData(searchText:string,page:number){
    let offset = (this.currentPage-1)*this.maxSize;
    let end = (this.currentPage)*this.maxSize;

    return this.postService.getPostList(searchText,page).subscribe(
      res=>{
        this.totalItems = res["total"];
        //TODO.正式环境中，需要去掉slice
        this.postList = res["items"].slice(offset,end>this.totalItems?this.totalItems:end);
      },
      error => {console.log(error)},
      () => {}
    );
  }

  public pageChanged(event:any):void {
    this.router.navigateByUrl("posts/page/"+event.page);
  }

  public searchChanged($event):void{
    this.searchTextStream.next(this.searchText);
  }

  public gotoWrite():void{
    //TODO：如果没有登录，跳转到登录页，如果已登录，跳往写作页
    this.router.navigateByUrl("write");
  }
}
