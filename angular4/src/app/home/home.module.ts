import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { homeRoutes } from './home.routes';
import {CategoryService} from "./category/services/category.service";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [HomeComponent, CategoryComponent],
  providers: [
    CategoryService
  ]
})
export class HomeModule { }
