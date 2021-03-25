import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl= environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    let newPath= this.apiUrl + 'carimages/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImagesByCar(carId:number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/getimagesbycar?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
