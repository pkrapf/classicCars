import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  constructor(private http: HttpClient) { }
  public postCars(cars: Object) {
    console.log(cars);
    return this.http.post(`/cars/add/`, cars);
  }

  getCars() {
    return this.http.get("/cars/get");
  }
}
