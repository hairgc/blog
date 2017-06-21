import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { ManageMainComponent } from './manage-main/manage-main.component';

import { PostTableComponent } from './post-table/post-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { VisitorTableComponent } from './visitor-table/visitor-table.component';
import { ManageGuard } from "./manage.guard";

import {manageRoutes} from "./manage.routes";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(manageRoutes)
  ],
  declarations: [
    ManageMainComponent,
    PostTableComponent,
    UserTableComponent,
    CommentTableComponent,
    VisitorTableComponent
  ],
  providers:[
    ManageGuard
  ]
})
export class ManageModule { }
