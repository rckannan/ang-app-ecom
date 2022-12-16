import { Component } from '@angular/core';
import { loggingService } from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [loggingService],
})
export class AppComponent {
  title = 'ang-app-ecom';
  navigatedMenu = 'receipe';
  logData: any;
  constructor(private loggingSrv: loggingService) {
    this.logData = loggingSrv.logData;
  }
  OnSelectMenu(menu: string) {
    this.navigatedMenu = menu;
  }
}
