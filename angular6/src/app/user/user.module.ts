import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { CategoryService } from "../home/category/services/category.service";
import { SharedModule } from "../shared/shared.module";
import { userRoutes } from './user.routes';
import {UserGuard} from "./user.guard";




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [],
  providers:[
    CategoryService,
    UserGuard
  ]
})
export class UserModule { }
