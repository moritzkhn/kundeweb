import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup, Validators } from '@angular/forms';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-update-nachname</code>
 */
@Component({
    selector: 'hs-update-nachname',
    templateUrl: './update-nachname.component.html',
})
export class UpdateNachnameComponent implements OnInit {
    private static readonly MIN_LENGTH = 2;

    @Input()
    updateForm!: FormGroup;

    @Input()
    currentValue!: string;

    nachname!: FormControl;

    ngOnInit() {
        log.debug(
            'UpdateNachnameComponent.ngOnInit: currentValue=',
            this.currentValue,
        );
        this.nachname = new FormControl(this.currentValue, [
            Validators.required,
            Validators.minLength(UpdateNachnameComponent.MIN_LENGTH),
            Validators.pattern(/^[ A-Za-z]+$/u),
        ]);
        this.updateForm.addControl('nachname', this.nachname);
    }
}
