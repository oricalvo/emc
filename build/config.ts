export class ExecutionMode {
    static DEV = "dev";
    static PROD = "prod";
}

export interface Config {
    version: string;
    mode: string;
    port: number;
    externalPort: number;
}

export const config: Config = require("./config.json");
validate(config);

function validate(config: Config) {
    if(config.mode != ExecutionMode.DEV && config.mode!=ExecutionMode.PROD) {
        throw new Error("Invalid config.mode: " + config.mode);
    }

    if(!config.version) {
        throw new Error("config.version is missing");
    }

    if(!config.port) {
        throw new Error("config.port is missing");
    }

    if(!config.externalPort) {
        throw new Error("config.externalPort is missing");
    }
}
