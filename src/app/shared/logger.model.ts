export class Logger {
  public LoggerMessage: string[];
  constructor(public status: string) {
    this.LoggerMessage.push('new log added : ' + status);
  }

  getLogMessages(): string[] {
    return this.LoggerMessage;
  }
}
