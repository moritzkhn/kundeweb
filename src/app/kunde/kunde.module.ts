import { CreateKundeModule } from './create-kunde/create-kunde.module';
import { NgModule } from '@angular/core';
import { UpdateKundeModule } from './update-kunde/update-kunde.module';

@NgModule({
    imports: [CreateKundeModule, UpdateKundeModule],
})
export class KundeModule {}
