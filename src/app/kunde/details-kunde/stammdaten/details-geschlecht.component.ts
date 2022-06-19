import { Component, Input, type OnInit } from '@angular/core';
import { type GeschlechtType } from '../../shared/kunde';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-details-geschlecht</code>
 */
@Component({
    selector: 'hs-details-geschlecht',
    templateUrl: './details-geschlecht.component.html',
})
export class DetailsGeschlechtComponent implements OnInit {
    @Input()
    geschlecht!: GeschlechtType | '' | undefined;

    ngOnInit() {
        log.debug('DetailsGeschlechtComponent.geschlecht=', this.geschlecht);
    }
}