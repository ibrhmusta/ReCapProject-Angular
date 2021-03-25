import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarRental } from '../models/carRental';
import { CarRentalDetail } from '../models/carRentalDetail';
import { ListResponseModel } from '../models/listReponseModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarRentalDetailService {
  apiUrl = environment.apiUrl + 'rentals/';

  constructor(private httpClient: HttpClient) {}

  getCarRentalDetails(): Observable<ListResponseModel<CarRentalDetail>> {
    let newPath = this.apiUrl + 'getrentaldetails';
    return this.httpClient.get<ListResponseModel<CarRentalDetail>>(newPath);
  }

  getRentalCars(): Observable<ListResponseModel<CarRental>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<CarRental>>(newPath);
  }

  addRental(rental: CarRental): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    console.log(newPath);
    return this.httpClient.post<ResponseModel>(newPath, rental);
  }
}
