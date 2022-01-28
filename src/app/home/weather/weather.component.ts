import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForecastService } from '../../core/services/forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  today: Date = new Date();
  weatherData!: any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private forecastService: ForecastService) {

  }
  ngOnInit(): void {

    this.forecastService.currentcoordinate$.subscribe(x => {
      this.weatherData = x;
    })
  }


}
