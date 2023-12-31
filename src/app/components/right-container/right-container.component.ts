import { Component } from '@angular/core';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent {
  today: boolean = false;
  week: boolean = true;

  celsius: boolean = true;
  fahrenheit: boolean = false;

  onTodayClick() {
    this.today = true;
    this.week = false;

  }
  onWeekClick() {
    this.week = true;
    this.today = false;
  }

  onCelsiusClick(){
    this.celsius = true;
    this.fahrenheit = false;

  }
  onFahrenheitClick(){
    this.fahrenheit = true;
    this.celsius = false;
  }

}
