import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = environment.apiUrl;
  filterText='sddsd';

  constructor(private httpClient: HttpClient) {}

  getCarWithFilter(brandId?: number,colorId?: number,status?: number): Observable<ListResponseModel<CarDetail>> {

    let newPath = this.apiUrl + 'cars/GetWithFilter?';

    if (brandId !== undefined) { newPath += 'brandId=' + brandId + '&';}
    if (colorId !== undefined) {newPath += 'colorId=' + colorId + '&';}
    if (status !== undefined) {newPath += 'status=' + status + '&';}

    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbybrand?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycolor?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getcardetailsbycar?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  // getCarsByColorAndBrand(
  //   colorId: number,
  //   brandId: number
  // ): Observable<ListResponseModel<CarDetail>> {
  //   let newPath =
  //     this.apiUrl +
  //     'cars/getcardetailsbycolorandbrand?colorId=' +
  //     colorId +
  //     '&brandId=' +
  //     brandId;
  //   return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  // }
}
