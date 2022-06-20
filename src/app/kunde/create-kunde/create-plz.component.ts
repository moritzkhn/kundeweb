import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup, Validators } from '@angular/forms';
import log from 'loglevel';

/**
 * Komponente mit dem Tag hs-create-plz, um das Erfassungsformular
 * für einen neuen Kunden zu realisieren.
 */
@Component({
    selector: 'hs-create-plz',
    templateUrl: './create-plz.component.html',
})
export class CreatePlzComponent implements OnInit {
    private static readonly MIN_LENGTH = 5;
    private static readonly MAX_LENGTH = 5;

    @Input()
    createForm!: FormGroup;

    readonly plz = new FormControl(undefined, [
        Validators.required,
        Validators.minLength(CreatePlzComponent.MIN_LENGTH),
        Validators.minLength(CreatePlzComponent.MAX_LENGTH),
        Validators.pattern(/^[0-9]{5}$/),
    ]);

    ngOnInit() {
        log.debug('CreatePlzComponent.ngOnInit');
        this.createForm.addControl('plz', this.plz);
    }
}
