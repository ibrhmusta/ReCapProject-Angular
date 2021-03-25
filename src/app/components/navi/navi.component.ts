import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  filterText= this.carService.filterText;

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    
  }

}
