import { Component, Input, type OnInit } from '@angular/core';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-details-kategorie</code>
 */
@Component({
    selector: 'hs-details-kategorie',
    templateUrl: './details-kategorie.component.html',
})
export class DetailsKategorieComponent implements OnInit {
    @Input()
    kategorie!: number | '';

    ngOnInit() {
        log.debug('DetailsKategorieComponent.kategorie=', this.kategorie);
    }
}