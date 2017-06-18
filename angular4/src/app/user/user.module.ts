import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { CategoryService } from "../home/category/services/category.service";
import { WritePostComponent } from '../post/write-post/write-post.component';
import { userRoutes } from './user.routes';
import {WritePostService} from "../post/write-post/service/write-post.service";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    WritePostComponent
  ],
  providers:[
    CategoryService,
    WritePostService
  ]
})
export class UserModule { }
