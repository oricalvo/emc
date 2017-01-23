import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {LocaleService} from "./services/locale.service";
import {AboutComponent} from "./components/about.component";
import {TranslatePipe} from "./pipes/translate.pipe";
import {HomeComponent} from "./components/home.component";
import {AppComponent}   from './components/app.component';
import {appRoutes} from "./routes";

function appInitializer(localeService: LocaleService){
    return function() {
        return localeService.init();
    }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TranslatePipe,
    ],
    bootstrap: [AppComponent],
    providers: [
        LocaleService,
        {provide: APP_INITIALIZER, useFactory: appInitializer, deps:[LocaleService], multi: true},
    ],
})
export class AppModule {
}
