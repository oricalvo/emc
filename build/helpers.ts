const gulp = require("gulp");
const shelljs = require("shelljs");
const logger = require("./logger");

export function shellExec(command, options?) {
    return new Promise(function(resolve, reject) {
        console.log("Running command: " + command);

        options = options || {};
        options.async = true;

        shelljs.exec(command, options, function(code, stdout, stderr) {
            if (code != 0) {
                reject(new Error("shell.exe returned error code " + code));
                return;
            }

            resolve();
        });
    });
}

export function delay(timeout){
    return new Promise(function(resolve, reject){
       setTimeout(function(){
           resolve();
       }, timeout)
    });
}
