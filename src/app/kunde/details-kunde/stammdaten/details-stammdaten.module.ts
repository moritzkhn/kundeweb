import { DetailsAdresseComponent } from "./details-adresse.component";
import { DetailsEmailComponent } from "./details-email.component";
import { DetailsFamilienstandComponent } from "./details-familienstand.component";
import { DetailsGeburtsdatumComponent } from "./details-geburtsdatum.component";
import { DetailsGeschlechtComponent } from "./details-geschlecht.component";
import { DetailsHomepageComponent } from "./details-homepage.component";
import { DetailsInteressenComponent } from "./details-interessen.component";
import { DetailsStammdatenComponent } from "./details-stammdaten.component";
import { DetailsKategorieComponent } from "./details-kategorie.component";
import { DetailsNachnameComponent } from "./details-nachname.component";
import { DetailsNewsletterComponent } from "./details-newsletter.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
  imports: [SharedModule],
  declarations: [
    DetailsAdresseComponent,
    DetailsEmailComponent,
    DetailsFamilienstandComponent,
    DetailsGeburtsdatumComponent,
    DetailsGeschlechtComponent,
    DetailsHomepageComponent,
    DetailsInteressenComponent,
    DetailsStammdatenComponent,
    DetailsKategorieComponent,
    DetailsNachnameComponent,
    DetailsNewsletterComponent,
  ],
  exports: [DetailsStammdatenComponent],
})
export class DetailsStammdatenModule {}
