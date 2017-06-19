import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Post} from "../model/post.model";
import {PostDetailService} from "../post-detail-main/service/post-detail.service";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post: Post = new Post();//获取父组件传递的值
  public editormdView:any;

  @Input()
  set parentPost(post:Post){
    this.post=post;
    this.editormdView = editormd.markdownToHTML("editormd-view", {
      htmlDecode      : "style,script,iframe",  // you can filter tags decode
      markdown        :post.postContent,
      emoji           : true,
      taskList        : true,
      tex             : true,  // 默认不解析
      flowChart       : true,  // 默认不解析
      sequenceDiagram : true,  // 默认不解析
    });
  }
  get parentPost(){
    return this.post;
  }
  constructor(public postDetailService:PostDetailService,
              public activeRoute: ActivatedRoute) { }

  ngOnInit() {

  }
}
