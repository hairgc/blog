import {Component, OnInit, Output} from '@angular/core';
import {Category} from "./model/category.model";
import {CategoryService} from "./services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories:Array<Category>;

  constructor(public categoryService:CategoryService,
              public router: Router) { }

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
