import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class LocaleService {
    current: Locale;

    constructor(private http: Http) {
    }

    init(){
        const locale = "en";
        return this.http.get(`/app/translations/${locale}.json`)
            .map(res => res.json())
            .toPromise()
            .then(translation => {
               this.current = {
                   id: locale,
                   translation: translation,
               };
            });
    }

    translate(key: string): any {
        const res = this.current.translation[key];
        if(!res){
            throw new Error(`Translation key ${key} was not found`);
        }

        return res;
    }

    tryTranslate(key: string): any {
        return this.current.translation[key];
    }
}

export interface Locale {
    id: string;
    translation: any;
}
