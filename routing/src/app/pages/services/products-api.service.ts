import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private readonly baseUrl: string = 'http://localhost:3000/products'


  constructor(

    private http: HttpClient

  ) { }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }

  findByProductName(name: string): Observable<Product> {
    return this.http.get<Product[]>(`${this.baseUrl}?name=${name}`).pipe(
      map(products => {
        console.log(products)
        return products[0]

      })
    )
  }
}
