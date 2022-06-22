import { Component, Input, type OnInit } from '@angular/core';
import { FormControl, type FormGroup, Validators } from '@angular/forms';
import log from 'loglevel';

/**
 * Komponente mit dem Tag hs-create-homepage, um das Erfassungsformular
 * für einen neuen Kunden zu realisieren.
 */
@Component({
    selector: 'hs-create-homepage',
    templateUrl: './create-homepage.component.html',
})
export class CreateHomepageComponent implements OnInit {
    private static readonly MIN_LENGTH = 2;

    @Input()
    createForm!: FormGroup;

    readonly homepage = new FormControl(undefined, [Validators.minLength(CreateHomepageComponent.MIN_LENGTH)]);

    ngOnInit() {
        log.debug('CreateHomepageComponent.ngOnInit');
        this.createForm.addControl('homepage', this.homepage);
    }
}
