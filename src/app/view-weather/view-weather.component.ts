import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-weather',
  templateUrl: './view-weather.component.html',
  styleUrls: ['./view-weather.component.css']
})
export class ViewWeatherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() weather: Object;
  @Input() systemInfo: Object = {};
  @Input() load: Boolean;




}
