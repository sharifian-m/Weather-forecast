import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { ForecastService } from '../core/services/forecast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formload: boolean = false;
  forecastform!: FormGroup;
  weatherData: any;
  location: string = '';
  constructor(private fb: FormBuilder,
    private forecastService: ForecastService,
    private route:Router
  ) { }


  ngOnInit(): void {
    this.forecastform = this.fb.group({
      location: ['', Validators.required],
    });
  }

  forecast() {
    this.location = this.forecastform.value.location;

    if (this.location != null && this.forecastform.valid) {

      this.forecastService.getWeather(this.location).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
        this.forecastService.setcoordinate(this.weatherData);
        this.formload = true;
        this.route.navigate(['location']);
      });

    }

  }
}