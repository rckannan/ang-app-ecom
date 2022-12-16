import { Component } from '@angular/core';
import { consoleloggingService } from './shared/consoleLog.service';
import { loggingService } from './shared/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [loggingService, consoleloggingService],
})
export class AppComponent {
  title = 'ang-app-ecom';
  navigatedMenu = 'receipe';
  logData: any;
  constructor(private loggingSrv: loggingService) {
    this.logData = loggingSrv.logData;

    this.loggingSrv.loggerEvent.subscribe((status : string) => {alert('New alert ' + status)});
  }
  OnSelectMenu(menu: string) {
    this.navigatedMenu = menu;
  }
}
