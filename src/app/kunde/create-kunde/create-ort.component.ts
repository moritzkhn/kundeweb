import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup, Validators } from '@angular/forms';
import log from 'loglevel';

/**
 * Komponente mit dem Tag hs-create-ort, um das Erfassungsformular
 * für einen neuen Kunden zu realisieren.
 */
@Component({
    selector: 'hs-create-ort',
    templateUrl: './create-ort.component.html',
})
export class CreateOrtComponent implements OnInit {
    private static readonly MIN_LENGTH = 2;

    @Input()
    createForm!: FormGroup;

    readonly ort = new FormControl(undefined, [
        Validators.required,
        Validators.minLength(CreateOrtComponent.MIN_LENGTH),
        Validators.pattern(/^\w/u),
    ]);

    ngOnInit() {
        log.debug('CreateOrtComponent.ngOnInit');
        this.createForm.addControl('ort', this.ort);
    }
}
