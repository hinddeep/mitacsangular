import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
  public bsTime = new BehaviorSubject({ h: 12, m: 12, s: 12 })
  public bsToggle = new BehaviorSubject({})
  public bsAdder = new BehaviorSubject({ h: 0, m: 0, s: 0 })
  public isRunning = false

  constructor() { }

  relayTime(hour: number, minute: number, second: number) {
    this.bsTime.next({ h: hour, m: minute, s: second })
  }

  toggleTime() {
    this.bsToggle.next({})
    this.isRunning = !this.isRunning
  }

  addTime(hour: number, minute: number, second: number) {
    this.bsAdder.next({ h: hour, m: minute, s: second })
  }
}
