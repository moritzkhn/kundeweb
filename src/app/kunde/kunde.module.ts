import { CreateKundeModule } from './create-kunde/create-kunde.module';
import { NgModule } from '@angular/core';
import { UpdateKundeModule } from './update-kunde/update-kunde.module';
import { SucheKundenModule } from './suche-kunde/suche-kunden.module';
import { DetailsKundeModule } from './details-kunde/details-kunde.module';

@NgModule({
    imports: [
        CreateKundeModule,
        UpdateKundeModule,
        SucheKundenModule,
        DetailsKundeModule,
    ],
})
export class KundeModule {}
