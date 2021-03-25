import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listReponseModel';
import { CarFilterPipe } from 'src/app/pipes/car-filter.pipe';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  carImagePaths: CarImage[] = [];
  carDetail:CarDetail;
  imageUrl = "https://localhost:44388/";


  constructor(private carImageService: CarimageService, private activatedRoute: ActivatedRoute, private carService:CarService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['carId']){
        this.getImagesByCar(params['carId'])
        this.getCarDetailsByCarId(params['carId'])
      }
    })
  }


  getCarDetailsByCarId(carId:number){
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.carDetail = response.data[0];
    })
  }

  getImagesByCar(carId: number) {
    this.carImageService.getCarImagesByCar(carId).subscribe((response) => {
      this.carImagePaths = response.data
    });
  }
}
