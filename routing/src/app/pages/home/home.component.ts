import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productName: string = ''

  constructor(
    private router: Router //injeção de dependencia
  ) { }

  ngOnInit(): void {
  }

  findProduct():void{
    this.router.navigateByUrl(`/product/${this.productName}`)
  }

}
