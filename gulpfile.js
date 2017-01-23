const shelljs = require("shelljs");

//
//  Out build scripts are written in Typescript
//  So first thing is to compile them and only then we load other scripts
//  Compile typescript before anyhting else
//
(function() {
    console.log("Compiling typescript");
    const res = shelljs.exec("node_modules\\.bin\\tsc");
    if (res.code != 0) {
        console.error("Typescript compilation failed");
        return;
    }
})();

const gulp = require("gulp");
const build = require("./build/main");
const path = require("path");
const baseDir = path.join(__dirname, "..");

gulp.task("dev", function() {
    return build.dev();
});

gulp.task("sass", function() {
    return build.compileSASS();
});

gulp.task("ts", function () {
    return build.compileTS();
});

gulp.task("cs", function () {
    return build.compileCSharp();
});

gulp.task("server", function() {
    return build.runServerDev();
});

gulp.task("iis", function () {
    return build.runIIS();
});

gulp.task("browser", function() {
    return build.openBrowser();
});

gulp.task("nuget", function () {
    return build.restoreNugetPackages();
});
