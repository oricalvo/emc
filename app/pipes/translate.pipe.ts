import {PipeTransform, Pipe} from "@angular/core";
import {LocaleService} from "../services/locale.service";

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
    constructor(private localeService: LocaleService){
    }

    transform(key: string) {
        return this.localeService.tryTranslate(key) || key;
    }
}
