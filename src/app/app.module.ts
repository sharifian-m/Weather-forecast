import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WeatherComponent } from './home/weather/weather.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ForecastService } from './core/services/forecast.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
