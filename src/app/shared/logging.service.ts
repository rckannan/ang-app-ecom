import { EventEmitter, Injectable } from '@angular/core';
import { Logger } from 'src/app/shared/logger.model';
import {consoleloggingService} from 'src/app/shared/consoleLog.service'

@Injectable()
export class loggingService {
  logData : Logger[]  = [];

  constructor(private consolelogger : consoleloggingService) {}
  doLog(srcs: string, status: string) {
    this.logData.push(new Logger(   srcs,  status ));
    this.consolelogger.doLogconsole('new log msg : ' + status);
  }
  
  doGetLog(){
    return this.logData;
  }

  loggerEvent = new EventEmitter<string>();
}
