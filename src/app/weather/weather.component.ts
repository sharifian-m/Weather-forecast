import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForecastService } from '../core/services/forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() location: any;
  today: Date = new Date();
// location!:any;
weatherData!:any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private forecastService:ForecastService) { 
 
  }
  ngOnInit(): void {
    console.log(this.location);
    
    this.forecastService.getWeather(this.location).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
  
      });
    }
}
