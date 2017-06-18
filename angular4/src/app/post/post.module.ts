import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationModule } from "ngx-bootstrap";
import { PostlistComponent } from './postlist/postlist.component';

import { postRoutes } from './post.routes';
import { PostlistService } from "./postlist/services/postlist.service";
import { PostDetailService } from "./post-detail/service/post-detail.service";
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(postRoutes)
  ],
  declarations: [PostlistComponent, PostDetailMainComponent, PostDetailComponent],

  providers:[
    PostlistService,
    PostDetailService
  ]
})
export class PostModule { }
