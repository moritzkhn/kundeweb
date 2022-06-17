import { Component, Output } from '@angular/core';
import { type GeschlechtType } from '../../shared/kunde';
import { Subject } from 'rxjs';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-suche-titel</code>
 */
@Component({
    selector: 'hs-suche-geschlecht',
    templateUrl: './suche-geschlecht.component.html',
})
export class SucheGeschlechtComponent {
    geschlecht: GeschlechtType | '' = '';

    @Output()
    readonly geschlecht$ = new Subject<GeschlechtType | '' >();

    constructor() {
        log.debug('SucheGeschlechtComponent.constructor()');
    }

    onChange(event: Event) {
        const { value } = event.target as HTMLInputElement;
        log.debug(`SucheGeschlechtComponent.onChange: geschlecht=${value}`);
        this.geschlecht$.next(value as GeschlechtType | '');
    }
}