import { Logging } from "@google-cloud/logging";
import { Factory, Lifetime } from "@mosconautas/di";
import { ConsoleLogger, GoogleLogger } from "../loggers";

export class ConsoleLoggerFactory extends Factory {
    public static make(lifetime = Lifetime.Singleton) {
        return super.resolve({
            lifetime: lifetime ?? Lifetime.Singleton,
            make: () => {
                return new ConsoleLogger(process.stdout);
            },
        });
    }
}

export class GoogleLoggerFactory extends Factory {
    public static make(name: string = "any", lifetime = Lifetime.Singleton) {
        return super.resolve({
            lifetime: lifetime ?? Lifetime.Singleton,
            make: () => {
                const logging = new Logging();
                const log = logging.log(name);

                return new GoogleLogger(logging, log);
            },
        });
    }
}
