import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { CardetailComponent } from './components/cardetail/cardetail.component';
import { CustomerdetailComponent } from './components/customerdetail/customerdetail.component';
import { CarrentaldetailComponent } from './components/carrentaldetail/carrentaldetail.component';
import { CarsComponent } from './components/cars/cars.component';
import { StatusComponent } from './components/status/status.component';

import { ToastrModule } from 'ngx-toastr';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    NaviComponent,
    CardetailComponent,
    CustomerdetailComponent,
    CarrentaldetailComponent,
    CarsComponent,
    StatusComponent,
    CarFilterPipe,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
