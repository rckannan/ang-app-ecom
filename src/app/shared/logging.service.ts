// import { Logger } from 'src/app/shared/logger.model';

// @ServiceWorker({

// })
export class loggingService {
  logData = [{ src: 'receipe', info: 'log info' }];

  constructor() {}
  doLog(srcs: string, status: string) {
    this.logData.push({ src: srcs, info: status });
    console.log('new log msg : ' + status);
  }
  
  doGetLog(){
    return this.logData;
  }
}
