import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup, Validators } from '@angular/forms';
import log from 'loglevel';

/**
 * Komponente mit dem Tag hs-create-username, um das Erfassungsformular
 * für einen neuen Kunden zu realisieren.
 */
@Component({
    selector: 'hs-create-username',
    templateUrl: './create-username.component.html',
})
export class CreateUsernameComponent implements OnInit {
    private static readonly MIN_LENGTH = 2;

    @Input()
    createForm!: FormGroup;

    readonly username = new FormControl(undefined, [
        Validators.required,
        Validators.minLength(CreateUsernameComponent.MIN_LENGTH),
    ]);

    ngOnInit() {
        log.debug('CreateUsernameComponent.ngOnInit');
        this.createForm.addControl('username', this.username);
    }
}
