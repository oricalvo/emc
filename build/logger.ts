import * as winston from "winston";
import * as fs from "fs";

export let logger = null;

export function init(fileName) {
    try {
        fs.unlinkSync(fileName);
    }
    catch (e) {
        //
        //  Ignore error. Probably file does not exist
        //
    }

    logger = new (winston.Logger)({
        transports: [
            new (winston.transports.File)({
                filename: fileName,
                json: false,
                level: "debug",
                maxsize: 1000000,
                tailable: true,
                formatter: formatter,
            })
        ],
        exitOnError: false
    });
}

function formatter(options) {
    var level;
    if (options.level == "debug") {
        level = "DBG";
    }
    else if (options.level == "info") {
        level = "INF";
    }
    else if (options.level == "error") {
        level = "ERR";
    }
    else if (options.level == "warning") {
        level = "WRN";
    }

    return new Date().toISOString() + " " +
        level + " " +
        (undefined !== options.message ? options.message : '');
}

export function debug(message, req) {
    if(!logger) {
        return;
    }

    logger.info("debug", message);
}

export function info(message) {
    if(!logger) {
        return;
    }

    logger.info("info", message);
}

export function warning(message, req) {
    if(!logger) {
        return;
    }

    logger.info("warn", message);
}

export function error(message, req) {
    if(!logger) {
        return;
    }

    logger.info("error", message);
}
