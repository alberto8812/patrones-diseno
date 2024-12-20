import { COLORS } from '../../helpers/colors.ts';


export class LocalLogger {
  constructor(
    private file: string
  ) {

  }

  writeLofile(message: string): void {
    console.log(`[${this.file} log] ${message}`);
  }
  writeLoError(message: string): void {
    console.log(`[${this.file} log] %c${message}`, COLORS.red);
  }
  writeWaring(message: string): void {
    console.log(`[${this.file} log] %c${message}`, COLORS.yellow);
  }


}