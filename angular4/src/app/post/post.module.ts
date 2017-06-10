import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { PostlistComponent } from './postlist/postlist.component';

import { postRoutes } from './post.routes';
import {PostlistService} from "./postlist/services/postlist.service";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild(postRoutes)
  ],
  declarations: [PostlistComponent],

  providers:[
    PostlistService
  ]
})
export class PostModule { }
