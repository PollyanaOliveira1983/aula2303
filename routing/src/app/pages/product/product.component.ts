import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiService } from '../services/products-api.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName: string = ''
  prod!: Product

  constructor(

    private route: ActivatedRoute, //injeta um objeto
    private prodApiService: ProductsApiService
  ) { }

  ngOnInit(): void {

    this.productName = this.route.snapshot.paramMap.get('name') || ''


    /* let param = this.route.snapshot.paramMap.get('name')

    console.log(param) */

    this.prodApiService.findByProductName(this.productName)
    .subscribe(
      (prod) => {
        this.prod = prod
      }
    )

    /* this.prodApiService.findAll().subscribe(
      (prods) => {
        console.log(prods)
      }
    ) */
  }

}
