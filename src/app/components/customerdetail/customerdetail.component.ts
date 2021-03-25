import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { CustomerDetailService } from 'src/app/services/customerdetail.service';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css']
})
export class CustomerdetailComponent implements OnInit {

  customerDetails : CustomerDetail[] =[];
  dataLoaded=false;

  constructor(private customerDetailService : CustomerDetailService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.customerDetailService.getCustomerDetails().subscribe(response=>{
      this.customerDetails = response.data;
      this.dataLoaded=true;
    })
  }

}
