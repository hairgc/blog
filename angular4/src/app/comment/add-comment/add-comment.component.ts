import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() onComment=new EventEmitter();
  @Input() public postId:number;

  public comment:Comment=new Comment();

  constructor(public commentService: CommentService,
              public loginService: LoginService,
              public toastr: ToastrService) { }

  ngOnInit() {
    this.hasLogin=this.loginService.hasLogin;
  }

  submitCommet(){
    this.comment.post.id=this.postId;
    this.commentService.newComment(this.comment).subscribe(
      res => {
        if(res&&res.success){
          this.onComment.emit();
        }else{
          this.toastr.error('评论失败！','系统提示');
        }
      },
      error => {
        console.error(error)
        this.toastr.error('评论失败！','系统提示');
      }
    );
  }
}
