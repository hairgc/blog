import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoginService} from "../../user/login/login.service";
import {CommentService} from "../service/comment.service";
import {ToastrService} from "ngx-toastr";
import {Comment} from "../model/comment.model";
@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  public hasLogin:boolean=false;//用户是否已经登录
  public submitted:boolean=false;//是否已经提交过
  @Output() onComment=new EventEmitter();
  @Input() public postId:number;

  @Input()
  set reName(value:{}){
    if(value && value['reName']){
      this.comment.reName=value['reName']
      this.elementRef.nativeElement.querySelector("#commentContent").focus()
    }
  }
  get reName(){
    return this.comment.reName;
  }
  public comment:Comment=new Comment();

  constructor(public commentService: CommentService,
              public loginService: LoginService,
              public toastr: ToastrService,
              public elementRef: ElementRef) { }

  ngOnInit() {
    this.hasLogin=this.loginService.hasLogin;
  }

  submitCommet(){
    this.comment.post.id=this.postId;
    this.commentService.newComment(this.comment).subscribe(
      res => {
        if(res&&res.success){
          this.onComment.emit();
          this.comment=new Comment();
        }else{
          this.toastr.error(res["msg"],'评论失败提示！');
        }
      },
      error => {
        this.toastr.error(error["msg"]?error["msg"]:"未知错误",'评论失败提示！');
      }
    );
  }
}
