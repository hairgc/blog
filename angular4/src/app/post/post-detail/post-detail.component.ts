import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Post} from "../model/post.model";
import {PostDetailService} from "./service/post-detail.service";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post: Post = new Post();
  public editormdView:any;

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
          this.editormdView = editormd.markdownToHTML("editormd-view", {
            htmlDecode      : "style,script,iframe",  // you can filter tags decode
            markdown        :data.postContent,
            emoji           : true,
            taskList        : true,
            tex             : true,  // 默认不解析
            flowChart       : true,  // 默认不解析
            sequenceDiagram : true,  // 默认不解析
          });
        },
        error => console.error(error)
      );
  }
}
