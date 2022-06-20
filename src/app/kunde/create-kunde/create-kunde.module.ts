/*
 * Copyright (C) 2016 - present Juergen Zimmermann, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CreateKundeComponent } from './create-kunde.component';
import { CreateNachnameComponent } from './create-nachname.component';
import { CreateEmailComponent } from './create-email.component';
import { CreateKategorieComponent } from './create-kategorie.component';
import { CreateNewsletterComponent } from './create-newsletter.component';
import { CreateGeschlechtComponent } from './create-geschlecht.component';
import { CreateFamilienstandComponent } from './create-familienstand.component';
import { CreateInteressenComponent } from './create-interessen.component';
import { CreatePlzComponent } from './create-plz.component';
import { CreateOrtComponent } from './create-ort.component';
import { CreateUsernameComponent } from './create-username.component';
import { CreatePasswordComponent } from './create-password.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { Title } from '@angular/platform-browser';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CreateGeburtsdatumComponent } from './create-geburtsdatum.component';

// Ein Modul enthaelt logisch zusammengehoerige Funktionalitaet.
// Exportierte Komponenten koennen bei einem importierenden Modul in dessen
// Komponenten innerhalb deren Templates (= HTML-Fragmente) genutzt werden.
// KundeModule ist ein "FeatureModule", das Features fuer Buecher bereitstellt
@NgModule({
    imports: [
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        SharedModule,
    ],
    declarations: [
        CreateNachnameComponent,
        CreateKundeComponent,
        CreateEmailComponent,
        CreateGeburtsdatumComponent,
        CreateKategorieComponent,
        CreateNewsletterComponent,
        CreateInteressenComponent,
        CreateGeschlechtComponent,
        CreateFamilienstandComponent,
        CreatePlzComponent,
        CreateOrtComponent,
        CreatePasswordComponent,
        CreateUsernameComponent,
    ],
    providers: [Title],
})
export class CreateKundeModule {}
