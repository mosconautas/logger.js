export interface ILogger extends ILog, ILogDebug, ILogError, ILogInformation, ILogWarning {}

export interface ILog {
    log(message: string, ...args: any[]): Promise<void>;
}

export interface ILogDebug {
    debug(message: string, ...args: any[]): Promise<void>;
}

export interface ILogError {
    error(stack: string, ...args: any[]): Promise<void>;
}

export interface ILogInformation {
    info(stack: string, ...args: any[]): Promise<void>;
}

export interface ILogWarning {
    warn(message: string, ...args: any[]): Promise<void>;
}
