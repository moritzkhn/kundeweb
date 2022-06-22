import { DetailsEmailComponent } from './details-email.component';
import { DetailsFamilienstandComponent } from './details-familienstand.component';
import { DetailsGeburtsdatumComponent } from './details-geburtsdatum.component';
import { DetailsGeschlechtComponent } from './details-geschlecht.component';
import { DetailsHomepageComponent } from './details-homepage.component';
import { DetailsInteressenComponent } from './details-interessen.component';
import { DetailsKategorieComponent } from './details-kategorie.component';
import { DetailsNachnameComponent } from './details-nachname.component';
import { DetailsNewsletterComponent } from './details-newsletter.component';
import { DetailsStammdatenComponent } from './details-stammdaten.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [
        DetailsEmailComponent,
        DetailsFamilienstandComponent,
        DetailsGeburtsdatumComponent,
        DetailsGeschlechtComponent,
        DetailsHomepageComponent,
        DetailsInteressenComponent,
        DetailsKategorieComponent,
        DetailsNachnameComponent,
        DetailsNewsletterComponent,
        DetailsStammdatenComponent,
    ],
    exports: [DetailsStammdatenComponent],
})
export class DetailsStammdatenModule {}
