import { Component } from '@angular/core';
import { CommunicationServiceService } from 'src/services/communication-service.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  constructor(public commService: CommunicationServiceService) {

  }

  onSubmit() {
    this.commService.addTime(this.hour, this.minute, this.second)
  }

  toggleTime() {
    this.commService.toggleTime()
  }
}
