import { type Temporal } from '@js-temporal/polyfill';

export type GeschlechtType = 'M'| 'W';

export type Familienstand = 'L' | 'VH'|'G'|'VM';

export type InteressenType = 'S' | 'L'| 'R';
export interface Umsatz {
  id?:string | null;
  betrag: number;
  waehrung: string;
}
export interface Adresse{
    id?:string|null;
    plz:string|'';
    ort:string|'';
}
/**
 * Model als Plain-Old-JavaScript-Object (POJO) fuer die Daten *UND*
 * Functions fuer Abfragen und Aenderungen.
 */
export interface Kunde {
    id?: string;
    version?: number;
    nachname: string;
    email: string;
    kategorie: number | 0;
    newsletter: boolean | false;
    geburtsdatum: Temporal.PlainDate | undefined;
    homepage: string| null;
    geschlecht:GeschlechtType | undefined;
    familienstand:Familienstand | null;
    interessen: InteressenType[] | undefined;
    umsatz: Umsatz | null;
    adresse: Adresse;
    userName:string;
    erzeugt:  Temporal.PlainDate; //TODO aktuelles Daatum + Zeit
    aktualisiert: Temporal.PlainDate;  //TODO aktuelles Daatum + Zeit
}

/**
 * Gemeinsame Datenfelder unabh&auml;ngig, ob die Kundedaten von einem Server
 * (z.B. RESTful Web Service) oder von einem Formular kommen.
 * Verwendung in den Interfaces:
 * - KundeServer für KundeReadService
 * - KundeForm für CreateKundeComponent
 */
export interface KundeShared {
    nachname: string;
    email: string;
    kategorie: number | 0;
    newsletter: boolean | false;
    geburtsdatum: Temporal.PlainDate | undefined;
    homepage: string| null;
    geschlecht:GeschlechtType | undefined;
    familienstand:Familienstand | null;
    interessen: InteressenType[] | undefined;
    umsatz: Umsatz | null;
    adresse: Adresse;
    userName:string;
}
