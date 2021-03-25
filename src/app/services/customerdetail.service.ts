import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerDetail } from '../models/customerDetail';
import { ListResponseModel } from '../models/listReponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl= environment.apiUrl + 'customers/getall';


  constructor(private httpClient: HttpClient) { }

  getCustomerDetails(): Observable<ListResponseModel<CustomerDetail>> {
    return this.httpClient.get<ListResponseModel<CustomerDetail>>(this.apiUrl);    
  }
}
