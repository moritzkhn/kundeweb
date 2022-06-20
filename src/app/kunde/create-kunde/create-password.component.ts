import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup, Validators } from '@angular/forms';
import log from 'loglevel';

/**
 * Komponente mit dem Tag hs-create-password, um das Erfassungsformular
 * für einen neuen Kunden zu realisieren.
 */
@Component({
    selector: 'hs-create-password',
    templateUrl: './create-password.component.html',
})
export class CreatePasswordComponent implements OnInit {
    private static readonly MIN_LENGTH = 2;

    @Input()
    createForm!: FormGroup;

    readonly password = new FormControl(undefined, [
        Validators.required,
        Validators.minLength(CreatePasswordComponent.MIN_LENGTH),
    ]);

    ngOnInit() {
        log.debug('CreatePasswordComponent.ngOnInit');
        this.createForm.addControl('password', this.password);
    }
}
