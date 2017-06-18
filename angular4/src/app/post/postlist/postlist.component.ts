import { Component, OnInit } from '@angular/core';
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
  public totalItems:number = 0;
  public itemsPerPage:number=5;
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

    this.activeRoute.queryParams.subscribe(params=>{
      this.categoryId=params.categoryId?params.categoryId:-1;
      this.loadData(this.searchText,params.page?params.page:1);
    })


    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        this.loadData(this.searchText,this.currentPage)
      });
  }

  public loadData(searchText:string,page:number){
    return this.postService.getPostList(searchText,page,this.categoryId).subscribe(
      res=>{
        this.totalItems = res["total"];
        this.postList = res["rows"];
      },
      error => {console.log(error)},
      () => {}
    );
  }

  public pageChanged(event:any):void {
    this.router.navigate(['/posts/page'],{queryParams:{categoryId:this.categoryId,page:event.page}});
  }

  public searchChanged($event):void{
    this.searchTextStream.next(this.searchText);
  }
}
