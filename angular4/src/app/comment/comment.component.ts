import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "app/comment/service/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  public comments: Array<Comment>=new Array<Comment>();//评论
  public currentPage:number = 1;
  public totalNum:number=0;
  public postId:number;
  public showLoad:boolean=false;
  public showLoading:boolean=false;
  @Input() public enableComment:boolean=false;
  @Input()
  set parentPostId(postId:number){
    if(postId>0){
      this.postId=postId;
      //这里写获取评论的方法
      this.getCommentList(postId,1);
    }
  }
  get parentPostId(){
    return this.postId;
  }
  constructor(public commentService:CommentService) { }

  ngOnInit() {
  }

  public getCommentList(postId: number,pageNum:number){
    this.showLoad=false;
    this.showLoading=true;
    this.commentService.getCommentList(postId,pageNum)
      .subscribe(
        data => {
          if(pageNum==1){
            this.comments=data["rows"]?data["rows"]:[];
          }else{
            this.comments=this.comments.concat(data["rows"]?data["rows"]:[]);
          }
          this.totalNum=data["total"];
          if(this.totalNum>pageNum*10 ){
            this.showLoad=true;
          }
          this.showLoading=false;
        },
        error => {
          console.error(error)
          this.showLoading=false;
        }
      );
  }

  public loadMore(){
    this.currentPage=this.currentPage+1;
    this.getCommentList(this.postId,this.currentPage)
  }

  public reload(){
    this.getCommentList(this.postId,1);
  }
}
