import { type Log, type Logging } from "@google-cloud/logging";
import { google } from "@google-cloud/logging/build/protos/protos";
import { LogEntry } from "@google-cloud/logging/build/src/entry";
import { ILogger } from "../logger";

import LogSeverity = google.logging.type.LogSeverity;

// See: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
export class GoogleLogger implements ILogger {
    constructor(private readonly _logging: Logging, private readonly _log: Log) {}

    public async log(message: string, ...args: any[]) {
        const metadata: LogEntry = {
            resource: { type: "global" },
            severity: LogSeverity.DEFAULT,
        };

        await this._log.write(this._logging.entry(metadata, { message: message, args: args }));
    }

    public async debug(message: string, ...args: any[]) {
        const metadata: LogEntry = {
            resource: { type: "global" },
            severity: LogSeverity.DEBUG,
        };

        await this._log.write(this._logging.entry(metadata, { message: message, args: args }));
    }

    public async warn(message: string, ...args: any[]) {
        const metadata: LogEntry = {
            resource: { type: "global" },
            severity: LogSeverity.WARNING,
        };

        await this._log.write(this._logging.entry(metadata, { message: message, args: args }));
    }

    public async info(message: string, ...args: any[]) {
        const metadata: LogEntry = {
            resource: { type: "global" },
            severity: LogSeverity.INFO,
        };

        await this._log.write(this._logging.entry(metadata, { message: message, args: args }));
    }

    public async error(stack: string, ...args: any[]) {
        const metadata: LogEntry = {
            resource: { type: "global" },
            severity: LogSeverity.ERROR,
        };

        await this._log.write(this._logging.entry(metadata, { stack: stack, args: args }));
    }
}
