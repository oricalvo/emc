"use strict";
var ExecutionMode = (function () {
    function ExecutionMode() {
    }
    return ExecutionMode;
}());
ExecutionMode.DEV = "dev";
ExecutionMode.PROD = "prod";
exports.ExecutionMode = ExecutionMode;
exports.config = require("./config.json");
validate(exports.config);
function validate(config) {
    if (config.mode != ExecutionMode.DEV && config.mode != ExecutionMode.PROD) {
        throw new Error("Invalid config.mode: " + config.mode);
    }
    if (!config.version) {
        throw new Error("config.version is missing");
    }
    if (!config.port) {
        throw new Error("config.port is missing");
    }
    if (!config.externalPort) {
        throw new Error("config.externalPort is missing");
    }
}
//# sourceMappingURL=config.js.map