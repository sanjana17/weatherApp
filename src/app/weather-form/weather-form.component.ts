import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})
export class WeatherFormComponent implements OnInit {

  constructor() { }

  myForm: FormGroup;



  ngOnInit() {
    this.myForm = new FormGroup({
      zipcode: new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]*$'),
        Validators.required,
        this.zipValidator
      ]))
    });
  }

  zipValidator(control : FormControl) {
    if(control.value.trim().length > 5){
      return { zip: true};
    }
    return null;
  }

  submitForm(value) {
    console.log(value);
  }

}
