import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost/api/Products';

  constructor(private httpClient: HttpClient) { }

  getProductByCategoryId(categoryId:Number):Observable<Product> {

    let newPath=this.apiUrl+"?categoryId="+categoryId

    return this.httpClient.get<Product>(newPath);
  }
}
