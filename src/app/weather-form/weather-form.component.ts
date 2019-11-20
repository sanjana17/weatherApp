import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { HttpService } from '../http.service';
import { WeatherResponse } from '../weather-response';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {
  myForm: FormGroup;


  weather = {};
  systemInfo: any;
  loading: boolean = true;

  constructor(private formBuilder: FormBuilder,
    private httpservice: HttpService) { }
  

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      zipcode: this.formBuilder.control('', Validators.compose([
        Validators.pattern('^[0-9]*$'),
        Validators.required,
        this.zipValidator
      ]))
    });
  }

  clearValue() {
    this.weather ={};
    this.systemInfo ={};
    this.loading = true;
  }

  zipValidator(control : FormControl) {
    if(control.value.trim().length !== 5){
      return { zip: true};
    }
    return null;
  }

  submitForm(value) {
    console.log(value);
    let url = "https://openweathermap.org/data/2.5/weather?zip="+value.zipcode+"&appid=b6907d289e10d714a6e88b30761fae22&id=4999837&units=metric"
    this.httpservice.get(url).subscribe((data: WeatherResponse) => {
      this.weather = data.weather[0];
      this.systemInfo = data.sys;
      this.loading = false;
    })
  
  }

}
