import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarRental } from '../models/carRental';
import { Payment } from '../models/payment';
import { ResponseModel } from '../models/ResponseModel';
import { CarRentalDetailService } from './carrentaldetail.service';

@Injectable({
  providedIn: 'root',
})

export class PaymentService {


  rental: CarRental;
  apiUrl = environment.apiUrl + 'payments/';


  constructor(
    private httpClient: HttpClient,
    private carRentalService: CarRentalDetailService,
    private toastrService:ToastrService
  ) {}



  addPayment(payment: Payment): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, payment);
  }



  addRentalAfterPayment(payment: Payment) {
    this.addPayment(payment).subscribe((response) => {
      this.carRentalService.addRental(this.rental).subscribe(response=>{
        this.toastrService.success('Success');
      });
    });
  }



  setRental(rental: CarRental) {
    this.rental = rental;
  }
}
