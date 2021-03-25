import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  SelectControlValueAccessor,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Payment } from 'src/app/models/payment';
import { CarRentalDetailService } from 'src/app/services/carrentaldetail.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  /* months:number[]=[1,2,3,4,5,6,7,8,9,10,11,12]
  selectedMonth:number;

  years:number[]=[2022,2023,2024,2025,2026,2027,2028,2029,2030]
  selectedYear:number; */

  paymentAddForm: FormGroup;
  payment: Payment;


  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createPaymentAddForm();
  }

  createPaymentAddForm() {
    this.paymentAddForm = this.formBuilder.group({
      nameOnTheCard: ['', Validators.required],
      cardNumber: ['', Validators.required],
      dateMonth: ['', Validators.required],
      dateYear: ['', Validators.required],
      cvvCode: ['', Validators.required],
    });
  }

  addPayment() {
    if (this.paymentAddForm.valid) {
      let paymentModel = Object.assign({}, this.paymentAddForm.value);
      this.paymentService.addRentalAfterPayment(paymentModel);
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }



    /*   this.paymentService.addPayment(this.payment).subscribe(response=>{
    this.toastrService.success('Success');
    }) */
  }
}
