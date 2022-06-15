
import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup, Validators } from '@angular/forms';
import log from 'loglevel';


/**
 * Komponente mit dem Tag hs-create-id, um das Erfassungsformular
 * für einen neuen Kunden zu realisieren
 */
 @Component({
    selector: 'hs-create-id',
    templateUrl: './create-id.component.html',
})
export class CreateIdComponent implements OnInit {
    @Input()
    createForm!: FormGroup;

    readonly id = new FormControl(undefined, [
        Validators.required,
    ]);

    ngOnInit() {
        log.debug('CreateIdComponent.ngOnInit');
        this.createForm.addControl('id', this.id);
    }
}