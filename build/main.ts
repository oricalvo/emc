import * as open2 from "open";
import * as helpers from "./helpers";
import * as logger from "./logger";
import * as path from "path";
import {config} from "../server/config";

console.log(config);

async function dev() {
    await compileTS();
    await compileSASS();
    await runServerDev();
    await helpers.delay(1500);
    openBrowser();
}

function compileTS() {
    logger.info("Compiling Typescript files");

    return helpers.shellExec(".\\node_modules\\.bin\\tsc");
}

function compileSASS() {
    logger.info("Compiling SASS files");

    helpers.shellExec(".\\node_modules\\.bin\\node-sass ./app --recursive --output ./app --source-map true");
}

function runServerDev() {
    logger.info("Running express server");

    helpers.shellExec("node ./node_modules/nodemon/bin/nodemon.js --watch server server/main.js", {
        newCommandWindow: true
    });

    return Promise.resolve();
}

function openBrowser() {
    logger.info("Opening browser");

    open2('http://localhost:8080/index.html');

    return Promise.resolve();
}

function enableLogging(fileName) {
    logger.init(fileName);
}

module.exports = {
    dev: dev,
    compileSASS: compileSASS,
    compileTS: compileTS,
    runServerDev: runServerDev,
    openBrowser: openBrowser,
    enableLogging: enableLogging,
};
