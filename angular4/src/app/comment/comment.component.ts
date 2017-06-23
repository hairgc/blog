import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "app/comment/service/comment.service";
import {LoginService} from "../user/login/login.service";
import {User} from "../user/model/user.model";
import {Comment} from "./model/comment.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  public comments: Array<Comment>=new Array<Comment>();//评论
  public hasLogin:boolean=false;//用户是否已经登录
  public currentUser:User = new User();//当前用户
  public currentPage:number = 1;
  public totalNum:number=0;
  public postId:number;
  public showLoad:boolean=false;
  public showLoading:boolean=false;
  public replayData:{}=new Object();

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
  constructor(public commentService:CommentService,
              public loginService: LoginService,
              public toastr: ToastrService) { }

  ngOnInit() {
    this.hasLogin=this.loginService.hasLogin;
    this.currentUser=this.loginService.user;
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

  public replay(reName:string){
    let o=new Object();
    o['reName']=reName;
    this.replayData=o;
  }

  public deleteComment(comment:Comment){
    let c=new Comment();
    c.post.id=this.postId;
    c.user.id=comment.user.id;
    c.id=comment.id;
    this.commentService.deleteComment(c).subscribe(
      res => {
        if(res&&res.success){
          this.getCommentList(this.postId,1);
        }else{
          this.toastr.error(res["msg"],'删除失败提示！');
        }
      },
      error => {
        this.toastr.error(error.json()["msg"]?error.json()["msg"]:"未知错误",'删除失败提示！');
      }
    );
  }

}
