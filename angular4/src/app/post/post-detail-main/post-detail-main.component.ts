import { Component, OnInit } from '@angular/core';
import {Post} from "../model/post.model";
import {PostDetailService} from "./service/post-detail.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-detail-main',
  templateUrl: './post-detail-main.component.html',
  styleUrls: ['./post-detail-main.component.css']
})
export class PostDetailMainComponent implements OnInit {

  public post: Post = new Post();

  constructor(public postDetailService:PostDetailService,
              public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      params =>{
        this.getPostDetail(params["postId"]);
      }
    );
  }
  public getPostDetail(id:number){
    this.postDetailService
      .getPostDetail(id)
      .subscribe(
        data => {
          this.post = data;
        },
        error => console.error(error)
      );
  }


}
