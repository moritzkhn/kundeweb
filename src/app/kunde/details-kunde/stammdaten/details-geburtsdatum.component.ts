import { Component, Input, type OnInit } from '@angular/core';
import { type Temporal } from '@js-temporal/polyfill';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-details-geburtsdatum</code>
 */
@Component({
    selector: 'hs-details-geburtsdatum',
    templateUrl: './details-geburtsdatum.component.html',
})
export class DetailsGeburtsdatumComponent implements OnInit {
    @Input()
    geburtsdatum: Temporal.PlainDate | undefined;

    ngOnInit() {
        log.debug('DetailsGeburtsdatumComponent: geburtsdatum=', this.geburtsdatum);
    }
}