import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  carDetails: CarDetail[] = [];
  filterText='';
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.getCarWithFilter(params['brandId'],params['colorId'],params['statuId']);
    });
    
  }
  

  getCarWithFilter(brandId?: number, colorId?: number, status?: number) {
    this.carService.getCarWithFilter(brandId, colorId, status).subscribe((response) => {
        this.carDetails = response.data;
      });
  }

  


  // getCarDetails() {
  //   this.carService.getCarDetails().subscribe((response) => {
  //     this.carDetails = response.data;
  //     this.dataLoaded = true;
  //   });
  // }

  // getCarsByBrand(brandId: number) {
  //   this.carService.getCarsByBrand(brandId).subscribe((response) => {
  //     this.carDetails = response.data;
  //     console.log(response.data);
  //   });
  // }

  // getCarsByColor(colorId: number) {
  //   this.carService.getCarsByColor(colorId).subscribe((response) => {
  //     this.carDetails = response.data;
  //     console.log(response.data);
  //   });
  // }

  // getCarsByColorAndBrand(colorId: number, brandId: number) {
  //   this.carService
  //     .getCarsByColorAndBrand(colorId, brandId)
  //     .subscribe((response) => {
  //       this.carDetails = response.data;
  //     });
  // }
}
