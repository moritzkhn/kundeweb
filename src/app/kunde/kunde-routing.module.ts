import { RouterModule, type Routes } from '@angular/router';
import { AdminGuard } from '../auth/admin.guard';
import { KundeModule } from './kunde.module';
import { CreateKundeComponent } from './create-kunde/create-kunde.component';
import { CreateKundeGuard } from './create-kunde/create-kunde.guard';
import { DetailsKundeComponent } from './details-kunde/details-kunde.component';
import { NgModule } from '@angular/core';
import { SucheKundenComponent } from './suche-kunden/suche-kunden.component';
import { UpdateKundeComponent } from './update-kunde/update-kunde.component';

// Route-Definitionen fuer das Feature-Modul "kunde":
// Zuordnung von Pfaden und Komponenten mit HTML-Templates
const routes: Routes = [
    {
        path: 'suche',
        component: SucheKundenComponent,
    },
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
        path: ':id',
        component: DetailsKundeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), KundeModule],
    exports: [RouterModule],
})
export class KundeRoutingModule {}
