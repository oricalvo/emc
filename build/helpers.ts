import * as shelljs from "shelljs";
import * as child_process from "child_process";

//
//  Spwans a new child process without waiting for it
//  On Windows the child process is opened in its own window
//
export function spawn(command) {
    return Promise.resolve().then(()=> {
        const child = child_process.spawn(command, [], {
            shell: true,
            detached: true,
            stdio: "ignore",
        });
        child.unref();
    });
}

export function exec(command, options?) {
    return new Promise(function(resolve, reject) {
        console.log("Running command: " + command);

        options = options || {};
        options.async = true;

        if(options.newCommandWindow) {
            if(process.platform == "win32") {
                command = "START " + command;
            }
        }

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
