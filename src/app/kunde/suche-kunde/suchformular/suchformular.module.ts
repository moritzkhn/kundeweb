import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SucheGeschlechtComponent } from './suche-geschlecht.component';
import { SucheNachnameComponent } from './suche-nachname.component';
import { SucheInteressenComponent } from './suche-interessen.component';
import { SuchformularComponent } from './suchformular.component';

@NgModule({
    imports: [SharedModule],
    declarations: [
        SucheGeschlechtComponent,
        SucheNachnameComponent,
        SucheInteressenComponent,
        SuchformularComponent,
    ],
    exports: [SuchformularComponent],
})
export class SuchformularModule {}
