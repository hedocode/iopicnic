import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})

export class TimerComponent implements OnInit {

  @Input() hour = 0;
  @Input() minutes = 0;
  @Input() secondes = 0;

  hidevalue: boolean;
  timer: any;

  constructor() { }

  ngOnInit() {
    this.StartTimer();
  }

  StartTimer() {
    this.timer = setTimeout(x => {
      if (this.secondes > 0  || this.hour > 0 || this.minutes > 0) {
        if (this.secondes > 0) {
          this.secondes --;
        } else {
          if (this.minutes > 0) {
            if (this.minutes > 60) {
              while (this.minutes > 60) {
                this.minutes -= 60;
                this.hour ++;
              }
            }
            this.minutes --;
            this.secondes = 59;
          } else {
            this.hour --;
            this.minutes = 59;
          }
        }
        this.StartTimer();
      }
    }, 1000);
  }
}
