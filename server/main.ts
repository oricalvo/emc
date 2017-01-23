import * as express from "express";
import * as path from "path";
import * as request from "request";
import {config} from "../build/config";

const app = express();

registerRouteWithPassThrough("/api/", `http://localhost:${config.externalPort}/api/`);
registerStaticHandler();
registerReturnIndexHtml();

init();

function init() {
    console.log("Server is running");
    console.log("    version: " + config.version);
    console.log("    mode: " + config.mode);
    console.log("    port: " + config.port);
    console.log("    externalPort: " + config.externalPort);

    app.listen(config.port);
}

function registerStaticHandler() {
    const basePath = path.join(__dirname, '..');
    var handler = express.static(basePath);

    app.use("/", function (req, res, next) {
        console.log("STATIC: " + req.url);

        handler(req, res, function() {
            console.log("    Static file not found. Move to next ...");
            next.apply(this, arguments);
        });
    });
}

function registerReturnIndexHtml() {
    app.get('*', function (req, res) {
        console.log("INDEX.HTML: " + req.url);

        if(req.url.indexOf(".")!=-1) {
            res.status(404).send();
        }
        else {
            res.sendFile(path.join(__dirname, '../index.html'));
        }
    });
}

function registerRouteWithPassThrough(baseUrl, externalUrl) {
    app.use(baseUrl + "*", function(req, res){
        var url = req.originalUrl;
        var tail = url.substring(baseUrl.length);
        var redirectUrl =  externalUrl + tail;

        console.log("REDIRECT: " + req.originalUrl + " --> " + redirectUrl);

        req.pipe(request(redirectUrl, function(error, response, body) {
            if(error) {
                console.error("ERROR: " + error.message);

                res.status(500).send("Redirect to " + externalUrl + " failed with error: " + error.message);
            }
        })).pipe(res);
    });
}
