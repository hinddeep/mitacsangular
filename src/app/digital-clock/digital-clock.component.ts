import { Component } from '@angular/core';
import { CommunicationServiceService } from 'src/services/communication-service.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent {
  date: Date = new Date()
  hour: number = 0
  minute: number = 0
  second: number = 0
  isRunning: boolean = true
  timerId: any

  constructor(public commService: CommunicationServiceService) {
  }

  start() {
    this.getTime()
  }

  clear() {
    clearInterval(this.timerId)
    console.log(this.timerId);
  }

  ngAfterViewInit() {
    this.commService.bsAdder.subscribe(event => {
      clearInterval(this.timerId)
      this.date.setHours(this.date.getHours() + event.h)
      this.date.setMinutes(this.date.getMinutes() + event.m)
      this.date.setSeconds(this.date.getSeconds() + event.s - 1)

      this.timerId = setInterval(() => {
        this.date.setSeconds(this.date.getSeconds() + 1)
        this.hour = this.date.getHours()
        this.minute = this.date.getMinutes()
        this.second = this.date.getSeconds()
        this.commService.relayTime(this.hour, this.minute, this.second)
      }, 1000)
    })
    this.commService.bsToggle.subscribe(event => {
      this.toggle()
    })
  }

  getTime() {
    this.timerId = setInterval(() => {
      this.date.setSeconds(this.date.getSeconds() + 1)
      this.hour = this.date.getHours()
      this.minute = this.date.getMinutes()
      this.second = this.date.getSeconds()
      this.commService.relayTime(this.hour, this.minute, this.second)
    }, 1000)
  }

  toggle() {
    if (this.isRunning) {
      clearInterval(this.timerId)
    } else { this.getTime() }

    this.isRunning = !this.isRunning
  }

  addTime() {

  }
}
