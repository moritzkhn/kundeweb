import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup } from '@angular/forms';
import log from 'loglevel';

/**
 * Komponente mit dem Tag hs-create-kategorie, um das Erfassungsformular
 *für einen neuen Kunden zu realisieren.
 */
@Component({
    selector: 'hs-create-kategorie',
    templateUrl: './create-kategorie.component.html',
})
export class CreateKategorieComponent implements OnInit {
    @Input()
    createForm!: FormGroup;

    readonly kategorie = new FormControl(undefined);

    ngOnInit() {
        log.debug('CreateKategorieComponent.ngOnInit');
        this.createForm.addControl('kategorie', this.kategorie);
    }
}
