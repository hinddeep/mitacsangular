import { Component, AfterViewInit } from '@angular/core';
import { CommunicationServiceService } from 'src/services/communication-service.service';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements AfterViewInit {
  hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(0deg)` }
  minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(0deg)` }
  secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(0deg)` }

  isRunning = false
  timerId: any

  date: Date = new Date()
  hour: number = 0
  minute: number = 0
  second: number = 0

  constructor(public commService: CommunicationServiceService) {
  }

  ngAfterViewInit() {
    this.timerId = this.getTime();
    this.commService.bsToggle.subscribe(event => {
      this.toggle()
    })
  }

  getTime() {
    return setInterval(() => {
      this.commService.bsTime.subscribe(event => {
        this.hour = event.h
        this.minute = event.m
        this.second = event.s
      })
      this.animateAnalogClock()
    }, 1000)
  }

  toggle() {
    if (this.isRunning) {
      clearInterval(this.timerId)
    } else { this.getTime() }
    this.isRunning = !this.isRunning
  }

  animateAnalogClock() {
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.minute * 0.5) + (this.second * (0.5 / 60))}deg)` }
    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.minute * 6) + (this.second * 0.1)}deg)` }
    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)` }
  }
}
