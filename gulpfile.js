const shelljs = require("shelljs");

//
//  Out build scripts are written in Typescript
//  So first thing is to compile them and only then we load other scripts
//  Compile typescript before anyhting else
//
compileBuild();

const gulp = require("gulp");
const build = require("./build/main");

build.enableLogging("build.log");

gulp.task("dev", function() {
    return build.dev();
});

gulp.task("sass", function() {
    return build.compileSASS();
});

gulp.task("ts", function () {
    return build.compileTS();
});

gulp.task("server", function() {
    return build.runServerDev();
});

gulp.task("browser", function() {
    return build.openBrowser();
});

function compileBuild() {
    console.log("Compiling build scripts");
    const res = shelljs.exec("node_modules\\.bin\\tsc -p ./build");
    if (res.code != 0) {
        console.error("Typescript compilation failed");
        return;
    }
}
