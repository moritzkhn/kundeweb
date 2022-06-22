import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Title } from '@angular/platform-browser';
import { UpdateKundeComponent } from './update-kunde.component';
import { UpdateNachnameComponent } from './update-nachname.component';

@NgModule({
    imports: [SharedModule],
    declarations: [UpdateKundeComponent, UpdateNachnameComponent],
    providers: [Title],
})
export class UpdateKundeModule {}
