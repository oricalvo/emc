(function (global) {
    System.config({
        defaultJSExtensions: true,
        meta: {
            "*.html": {
                loader: "text"
            },
            "*.css": {
                loader: "text"
            },
            "*.json": {
                loader: "json"
            }
        },
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            app: 'app',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            'rxjs': 'npm:rxjs',
            'text': 'npm:systemjs-plugin-text/text.js',
            'css': 'npm:systemjs-plugin-css/css.js',
            'json': 'npm:systemjs-plugin-json/json.js',
            'redux': 'npm:redux/dist/redux.js',
            'reflect-metadata': 'node_modules/reflect-metadata/Reflect.js',
            'zone.js': 'node_modules/zone.js/dist/zone.js',
            'primeng': 'npm:primeng'
        },
        packages: {
            app: {
                main: './main',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            primeng: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
