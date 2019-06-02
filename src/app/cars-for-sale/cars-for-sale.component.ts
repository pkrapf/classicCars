import { Component, OnInit } from '@angular/core';
import { CarsServiceService } from '../cars-service.service';

@Component({
  selector: 'app-cars-for-sale',
  templateUrl: './cars-for-sale.component.html',
  styleUrls: ['./cars-for-sale.component.scss']
})
export class CarsForSaleComponent implements OnInit {
  cars: any;

  constructor(private carsService: CarsServiceService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carsService.getCars()
    .subscribe(res => this.cars = res["cars"]);
  }
}
