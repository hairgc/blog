import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationModule } from "ngx-bootstrap";
import { PostlistComponent } from './postlist/postlist.component';

import { postRoutes } from './post.routes';
import { PostlistService } from "./postlist/services/postlist.service";
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import {PostDetailService} from "./post-detail-main/service/post-detail.service";
import {SharedModule} from "../shared/shared.module";
import {CommentComponent} from "../comment/comment.component";
import {AddCommentComponent} from "../comment/add-comment/add-comment.component";
import {CommentService} from "../comment/service/comment.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    TranslateModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(postRoutes)
  ],
  declarations: [
    PostlistComponent,
    PostDetailMainComponent,
    PostDetailComponent,
    CommentComponent,
    AddCommentComponent
  ],

  providers:[
    PostlistService,
    PostDetailService,
    CommentService
  ]
})
export class PostModule { }
