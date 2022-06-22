import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SucheGeschlechtComponent } from './suche-geschlecht.component';
import { SucheInteressenComponent } from './suche-interessen.component';
import { SucheNachnameComponent } from './suche-nachname.component';
import { SuchformularComponent } from './suchformular.component';

@NgModule({
    imports: [SharedModule],
    declarations: [
        SucheGeschlechtComponent,
        SucheInteressenComponent,
        SucheNachnameComponent,
        SuchformularComponent,
    ],
    exports: [SuchformularComponent],
})
export class SuchformularModule {}
