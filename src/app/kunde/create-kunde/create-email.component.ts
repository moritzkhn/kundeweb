import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup, Validators } from '@angular/forms';
import log from 'loglevel';

/**
 * Komponente mit dem Tag hs-create-email, um das Erfassungsformular
 * für einen neuen Kunden zu realisieren
 */
@Component({
    selector: 'hs-create-email',
    templateUrl: './create-email.component.html',
})
export class CreateEmailComponent implements OnInit {
    @Input()
    createForm!: FormGroup;

    readonly email = new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/),
    ]);

    ngOnInit() {
        log.debug('CreateEmailComponent.ngOnInit');
        this.createForm.addControl('email', this.email);
    }
}
