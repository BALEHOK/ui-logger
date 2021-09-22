import { ConsoleLogger } from './consoleLogger';

export interface ILogger {
  log: (...date: any[]) => void;
  warn: (...date: any[]) => void;
  error: (...date: any[]) => void;
}

export const logger = new ConsoleLogger();
