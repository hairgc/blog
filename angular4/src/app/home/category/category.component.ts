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

  private categories:Array<Category>;

  private category:Category=new Category();

  constructor(private categoryService:CategoryService,
              private router: Router) { }

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

  onSelectCategory(category:Category){
    if(!this.category || this.category.id!==category.id){
      this.router.navigate(['/posts/page',1],{queryParams:{categoryId:category.id}});
      this.category=category;
    }
  }
}
