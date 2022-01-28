import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForecastService } from './core/services/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  today: Date = new Date();
  formload: boolean=false;
  forecastform!: FormGroup;
  weatherData: any;
  location: any;
  constructor(private fb: FormBuilder,
    private forecastService: ForecastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.forecastform = this.fb.group({
      location: [""]
    });
  }
}
