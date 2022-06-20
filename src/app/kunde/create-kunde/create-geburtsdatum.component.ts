import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup } from '@angular/forms';
import log from 'loglevel';

// https://mattlewis92.github.io/angular-calendar/#/kitchen-sink

/**
 * Komponente mit dem Tag &lt;hs-create-geburtsdatum&gt;, um das Erfassungsformular
 * f&uuml;r einen neuen Kunden zu realisieren.
 */
@Component({
    selector: 'hs-create-geburtsdatum',
    templateUrl: './create-geburtsdatum.component.html',
})
export class CreateGeburtsdatumComponent implements OnInit {
    @Input()
    createForm!: FormGroup;

    readonly today = new Date();

    readonly geburtsdatum = new FormControl(this.today);

    ngOnInit() {
        log.debug('CreateGeburtsdatumComponent.ngOnInit');
        // siehe formControlName innerhalb @Component({templateUrl: ...})
        this.createForm.addControl('geburtsdatum', this.geburtsdatum);
    }

    dayClicked({ date }: { date: Date }): void {
        log.debug('CreateGeburtsdatumComponent: dayClicked', date);
        this.createForm.setControl('geburtsdatum', new FormControl(date));
    }
}
