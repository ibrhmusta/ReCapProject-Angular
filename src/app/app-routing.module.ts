import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CarsComponent } from './components/cars/cars.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:'' , pathMatch:'full', component:CarsComponent},
  {path:'cars', component:CarsComponent},
  // {path:'cars/brand/:brandId', component:CarsComponent},
  // {path:'cars/color/:colorId', component:CarsComponent},
  {path:'cars/detail/:carId', component:CardetailComponent},
  {path:'detail/:carId', component:CardetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
