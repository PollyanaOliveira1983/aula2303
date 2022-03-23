import { Component, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ErrorComponent } from './pages/error/error/error.component'
import { ProductComponent } from './pages/product/product.component'

const routes : Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'product/:name',
    component: ProductComponent
  },
  {
    path: '**',
    /* redirectTo: '/login' */
    component: ErrorComponent
  }
]

@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

