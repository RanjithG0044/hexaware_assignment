import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  
  getLondon() {
	  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=520fd67b8d2665b21137fbdd5ee1ee5d');
  }
  
  getParis() {
	  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Paris,France&appid=520fd67b8d2665b21137fbdd5ee1ee5d');
  }
  
  getMunich() {
	  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Munich,Germany&appid=520fd67b8d2665b21137fbdd5ee1ee5d');
  }
  
  getBirmingham() {
	  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Birmingham,uk&appid=520fd67b8d2665b21137fbdd5ee1ee5d');
  }
  
  getMoscow() {
	  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Moscow,Russia&appid=520fd67b8d2665b21137fbdd5ee1ee5d');
  }
  
  getAllApisData(){
    const response1 = this.getLondon();
    const response2 = this.getParis();
    const response3 = this.getMunich();
    const response4 = this.getBirmingham();
    const response5 = this.getMoscow();
    return forkJoin([response1, response2, response3, response4, response5]);
  }
  
  getFiveDay(city) {
	  return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=520fd67b8d2665b21137fbdd5ee1ee5d');
  }
  
}
