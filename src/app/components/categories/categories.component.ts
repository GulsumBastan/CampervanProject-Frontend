import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories : Category[]=[];
  constructor(private categoryService:CategoryService,private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response
    })
  }
  goToProductDetail(categoryId:number) {
    this.router.navigate(['/product-detail', categoryId]);
  }
}
