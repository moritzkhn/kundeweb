import { Component, Input, type OnInit } from '@angular/core';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-details-newsletter</code>
 */
@Component({
    selector: 'hs-details-newsletter',
    templateUrl: './details-newsletter.component.html',
})
export class DetailsNewsletterComponent implements OnInit {
    @Input()
    newsletter: boolean | undefined;

    ngOnInit() {
        log.debug('DetailsNewsletterComponent.newsletter=', this.newsletter);
    }
}
