import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import {
  DataTableModule, DialogModule, DropdownModule, InputTextModule,
  SharedModule as PrimengSharedModule
} from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';

import { SharedModule} from '../shared/shared.module';
import { ManageMainComponent } from './manage-main/manage-main.component';
import { PostTableComponent } from './post-table/post-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CommentTableComponent } from './comment-table/comment-table.component';
import { VisitorTableComponent } from './visitor-table/visitor-table.component';
import { ManageGuard } from "./manage.guard";
import { VisitorService } from "./visitor-table/services/visitor.service";
import { manageRoutes } from "./manage.routes";
import { PostTableService } from "./post-table/services/post-table.service";
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryTableService } from "./category-table/services/category-table.service";
import {CommentTableService} from "./comment-table/services/comment-table.service";



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    DropdownModule,
    PrimengSharedModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RouterModule.forChild(manageRoutes)
  ],
  declarations: [
    ManageMainComponent,
    PostTableComponent,
    UserTableComponent,
    CommentTableComponent,
    VisitorTableComponent,
    CategoryTableComponent
  ],
  providers:[
    ManageGuard,
    VisitorService,
    PostTableService,
    CategoryTableService,
    CommentTableService
  ]
})
export class ManageModule { }
