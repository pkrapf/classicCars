import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CarsServiceService } from '../cars-service.service';

@Component({
  selector: 'app-cars-admin',
  templateUrl: './cars-admin.component.html',
  styleUrls: ['./cars-admin.component.scss']
})

export class CarsAdminComponent implements OnInit {
  carsFormGroup: FormGroup

  constructor(private carsService: CarsServiceService) {
    this.carsFormGroup = this.createFormGroup()
  }
  createFormGroup() {
    return new FormGroup({
      yearMakeModel: new FormControl('', [Validators.required, Validators.minLength(10)]),
      description: new FormControl('', [Validators.required, Validators.minLength(20)]),
      imageURL: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }

  carsSubmit() {
    if (this.carsFormGroup.valid) {
      this.carsService.postCars(this.carsFormGroup.value).subscribe(res => console.log(res));
      this.carsFormGroup.reset();
    }
  }

  ngOnInit() {
  }
}
