import {Routes} from "@angular/router";
import {AboutComponent} from "./components/about.component";
import {HomeComponent} from "./components/home.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
];
