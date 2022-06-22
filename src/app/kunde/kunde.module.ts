import { CreateKundeModule } from './create-kunde/create-kunde.module';
import { DetailsKundeModule } from './details-kunde/details-kunde.module';
import { NgModule } from '@angular/core';
import { SucheKundenModule } from './suche-kunde/suche-kunden.module';
import { UpdateKundeModule } from './update-kunde/update-kunde.module';

@NgModule({
    imports: [
        CreateKundeModule,
        DetailsKundeModule,
        SucheKundenModule,
        UpdateKundeModule,
    ],
})
export class KundeModule {}
