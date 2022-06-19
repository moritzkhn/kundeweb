import { Component, Input, type OnInit } from '@angular/core';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-details-adresse</code>
 */
@Component({
    selector: 'hs-details-adresse',
    templateUrl: './details-adresse.component.html',
})
export class DetailsAdresseComponent implements OnInit {
    @Input()
    adresse!: string;

    ngOnInit() {
        log.debug('DetailsAdresseComponent.adresse=', this.adresse);
    }
}