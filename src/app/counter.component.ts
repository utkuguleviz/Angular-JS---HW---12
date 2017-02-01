import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'CounterComponent',
  template: `<button (click) = "decrease()">-</button> {{counterValue}}
                <button (click) = "increase()">+</button>
              `,
  outputs: ['counterChange'],
  styles: ['']
})
export class CounterComponent implements OnInit {
  counterValue = 0;
  counterChange : EventEmitter<number>;
  @Input() counter = 0;

  constructor() { 
    this.counterChange = new EventEmitter();
  }

  increase(){
    this.counterValue += 1;
    this.counter += 1;
    this.counterChange.emit(this.counter);
  }
  decrease(){
    this.counterValue -= 1;
    this.counter -= 1;
    this.counterChange.emit(this.counter);
  }

  @Input('counter') set setCounter(value: number){
    this.counterValue = value - 0;// - 0 for conversion to number
    this.counter = value - 0;
    this.counterChange.emit(value);
  }

  ngOnInit() {
  }

}
