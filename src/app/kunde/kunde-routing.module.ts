import { RouterModule, type Routes } from '@angular/router';
import { AdminGuard } from '../auth/admin.guard';
import { KundeModule } from './kunde.module';
import { CreateKundeComponent } from './create-kunde/create-kunde.component';
import { CreateKundeGuard } from './create-kunde/create-kunde.guard';
import { SucheKundenComponent } from './suche-kunde/suche-kunden.component';
import { Component, NgModule } from '@angular/core';
import { UpdateKundeComponent } from './update-kunde/update-kunde.component';
import { DetailsKundeComponent } from './details-kunde/details-kunde.component';

// Route-Definitionen fuer das Feature-Modul "kunde":
// Zuordnung von Pfaden und Komponenten mit HTML-Templates
const routes: Routes = [
    {
        path: 'create',
        component: CreateKundeComponent,
        canActivate: [AdminGuard],
        canDeactivate: [CreateKundeGuard],
    },

    // id als Pfad-Parameter
    {
        path: 'update/:id',
        component: UpdateKundeComponent,
        canActivate: [AdminGuard],
    },
    {
        path: 'suche',
        component: SucheKundenComponent,
    },
    {
        path: ':id',
        component: DetailsKundeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), KundeModule],
    exports: [RouterModule],
})
export class KundeRoutingModule {}
