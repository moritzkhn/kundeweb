import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Title } from '@angular/platform-browser';
import { UpdateNachnameComponent } from './update-nachname.component';
import { UpdateKundeComponent } from './update-kunde.component';

@NgModule({
    imports: [SharedModule],
    declarations: [UpdateNachnameComponent, UpdateKundeComponent],
    providers: [Title],
})
export class UpdateKundeModule {}
