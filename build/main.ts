import * as open2 from "open";
import * as helpers from "./helpers";
import * as logger from "./logger";
import {config} from "../server/config";

export async function dev() {
    await compileTS();
    await compileSASS();
    await runServerDev();
    await helpers.delay(1500);
    openBrowser();
}

export function compileTS() {
    logger.info("Compiling Typescript files");

    return helpers.exec(".\\node_modules\\.bin\\tsc");
}

export function compileSASS() {
    logger.info("Compiling SASS files");

    return helpers.exec(".\\node_modules\\.bin\\node-sass ./app --recursive --output ./app --source-map true");
}

export function runServerDev() {
    logger.info("Running express server");

    return helpers.spawn("node ./node_modules/nodemon/bin/nodemon.js --watch server server/main.js");
}

export function openBrowser() {
    logger.info("Opening browser");

    open2(`http://localhost:${config.port}/index.html`);

    return Promise.resolve();
}

export function enableLogging(fileName) {
    logger.init(fileName);
}
