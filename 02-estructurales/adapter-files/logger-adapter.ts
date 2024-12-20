import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter

interface LoggerAdapter {

    file: string;
    writeLofile: (message: string) => void;
    writeWaring: (message: string) => void;
    writeLoError: (message: string) => void;
}

export class DenoLoggerAdapterImpl implements LoggerAdapter {
    public file: string;
    private logger = new Logger();
    constructor(file: string) {
        this.file = file;
    }
    writeLofile(message: string) {
        this.logger.info(`[${this.file} log] ${message}`);
    };
    writeWaring(message: string) {
        this.logger.warn(`[${this.file} log] ${message}`);
    };
    writeLoError(message: string) {
        this.logger.error(`[${this.file} log] ${message}`);
    };

}