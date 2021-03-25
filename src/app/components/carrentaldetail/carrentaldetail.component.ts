import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { CarRental } from 'src/app/models/carRental';
import { CarRentalDetail } from 'src/app/models/carRentalDetail';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { CarRentalDetailService } from 'src/app/services/carrentaldetail.service';
import { CustomerDetailService } from 'src/app/services/customerdetail.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-carrentaldetail',
  templateUrl: './carrentaldetail.component.html',
  styleUrls: ['./carrentaldetail.component.css'],
})
export class CarrentaldetailComponent implements OnInit {
  @Input() car: CarDetail;
  carRentalDetails: CarRentalDetail[] = [];
  customerDetails: CustomerDetail[] = [];
  dataLoaded = false;
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  state:number = 1;

  firstDateSelected:boolean= false;
  minDate:string;
  maxDate:string;

  constructor(
    private carRentalDetailService : CarRentalDetailService,
    private customerDetailService:CustomerDetailService,
    private paymentService: PaymentService,
    private toastrService:ToastrService

  ) {}




  ngOnInit(): void {
    this.getCarRentalDetails();
    this.getCustomerDetails();
  }


  getCarRentalDetails() {
    this.carRentalDetailService.getCarRentalDetails().subscribe((response) => {
      this.carRentalDetails = response.data;
      this.dataLoaded = true;
    });
  }


  getCustomerDetails() {
    this.customerDetailService.getCustomerDetails().subscribe((response) => {
      this.customerDetails = response.data;
    });
  }


  addRentalCar() {
    let rental: CarRental = {
      carId: this.car.carID,
      customerId: this.customerId,
      rentDate: this.rentDate,
      returnDate: this.returnDate,
    };



    this.paymentService.setRental(rental);
    this.toastrService.success('Your rental request has been received. You are redirected to the payment page.');

      this.state =2;
 
  }


  onChangeEvent(event: any){
    this.minDate = event.target.value
    this.firstDateSelected = true
  }


  checkReturnDate(){
    if (this.returnDate < this.rentDate) {
      this.returnDate = this.rentDate
    }
  }


}
