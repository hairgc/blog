import { Component, OnInit } from '@angular/core';
import {Category} from "./model/category.model";
import {CategoryService} from "./services/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private categories:Array<Category>;

  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.queryCategory();
  }

  queryCategory(){
    this.categoryService
      .queryCategory()
      .subscribe(
        data => this.categories = data,
        error => console.error(error)
      )
  }
}
