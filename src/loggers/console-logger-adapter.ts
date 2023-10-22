import { Console } from "console";
import { ILogger } from "../logger";

export class ConsoleLogger extends Console implements ILogger {
    public async log(message: string, ...args: any[]): Promise<void> {
        super.log(message, args);
    }

    public async debug(message: string, ...args: any[]): Promise<void> {
        super.debug(message, args);
    }

    public async warn(message: string, ...args: any[]): Promise<void> {
        super.warn(message, args);
    }

    public async info(message: string, ...args: any[]): Promise<void> {
        super.info(message, args);
    }

    public async error(stack: string, ...args: any[]): Promise<void> {
        super.error(stack, args);
    }
}
