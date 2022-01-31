import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { WeatherInfo } from '../models/weather';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  apiUrl=environment.apiUrl;
  apiKey=environment.apiKey;

  oneforecast: WeatherInfo = {
    name: '--',
    weather: [{ main: '--', description: '--' }],

    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    }
  }
  private coordinate$ = new BehaviorSubject<WeatherInfo>(this.oneforecast);
  currentcoordinate$ = this.coordinate$.asObservable();


  constructor(private http: HttpClient) { }

  getWeather(location: any) {
    return this.http.get(
      this.apiUrl + location + '&units=metric' + '&appid=' + this.apiKey)
      .pipe(catchError(err => {
        if (err.status === 404) {
          console.log(`Location ${location} not found`);
          return EMPTY
        }
      })
      );
  }
  setcoordinate(weatherinfo: WeatherInfo) {
    this.coordinate$.next(weatherinfo);
  }
}