import { ILogger } from './logger';

export class ConsoleLogger implements ILogger {
  log(...data: any[]): void {
    // eslint-disable-next-line no-console
    console.log(...data);
  }
  warn(...data: any[]): void {
    // eslint-disable-next-line no-console
    console.warn(...data);
  }
  error(...data: any[]): void {
    // eslint-disable-next-line no-console
    console.error(...data);
  }
}
