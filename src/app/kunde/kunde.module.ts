import { CreateKundeModule } from "./create-kunde/create-kunde.module";
import { DetailsKundeModule } from "./details-kunde/details-kunde.module";
import { NgModule } from "@angular/core";
import { SucheKundenModule } from "./suche-kunden/suche-kunden.module";

@NgModule({
  imports: [DetailsKundeModule, SucheKundenModule, CreateKundeModule],
})
export class KundeModule {}
