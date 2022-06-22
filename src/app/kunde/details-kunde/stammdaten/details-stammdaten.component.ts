import { Component, Input, type OnInit } from '@angular/core';
import { type Kunde } from '../../shared/kunde';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-stammdaten</code>
 */
@Component({
    selector: 'hs-details-stammdaten',
    templateUrl: './details-stammdaten.component.html',
})
export class DetailsStammdatenComponent implements OnInit {
    // Property Binding: <hs-details-stammdaten [buch]="...">
    // Decorator fuer ein Attribut. Siehe InputMetadata
    @Input()
    kunde!: Kunde;

    ngOnInit() {
        log.debug('DetailsStammdatenComponent.kunde=', this.kunde);
    }
}
