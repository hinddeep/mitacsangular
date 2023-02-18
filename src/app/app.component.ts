import { Component } from '@angular/core';
import { CommunicationServiceService } from 'src/services/communication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';

  constructor(public commService: CommunicationServiceService) {

  }

  toggleTime() {
    this.commService.toggleTime()
  }
}
