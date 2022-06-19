import { GefundeneKundenModule } from '../gefundene-kunden/gefundene-kunden.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SuchergebnisComponent } from './suchergebnis.component';

@NgModule({
    imports: [GefundeneKundenModule, SharedModule],
    declarations: [SuchergebnisComponent],
    exports: [SuchergebnisComponent],
})
export class SuchergebnisModule {}
