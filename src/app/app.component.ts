import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue = 7;

  changeComponentCounterValue(value: number){
    this.ComponentCounterValue = value;
  }
}
