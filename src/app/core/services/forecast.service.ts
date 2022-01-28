import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { WeatherInfo } from '../models/weather';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForecastService {

 
  oneforecast: WeatherInfo = {
    name:'--',
    weather:[{main:'--', description: '--'}],
   
    main: {
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
  }
  }
    private  coordinate$ = new BehaviorSubject<any>(this.oneforecast);
   currentcoordinate$ = this.coordinate$.asObservable();

    
  constructor(private http: HttpClient) {}
  // return this.http.get(`${this.API_URL + 'contacts'}/${contactId}`) 
  getWeather(location:any) {
    return this.http.get(
     environment.apiUrl + location + '&units=metric' +'&appid=' + environment.apiKey
    );
  }


  setcoordinate (location:string){
this.coordinate$.next(location);
  }
}