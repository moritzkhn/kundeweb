import { Component, Input, type OnInit } from '@angular/core';
import { type InteressenType } from '../../shared/kunde';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-details-interessen</code>
 */
@Component({
    selector: 'hs-details-interessen',
    templateUrl: './details-interessen.component.html',
})
export class DetailsInteressenComponent implements OnInit {
    @Input()
    interessen: InteressenType | '' | undefined;

    ngOnInit() {
        log.debug('DetailsInteressenComponent.interessen=', this.interessen);
    }
}
