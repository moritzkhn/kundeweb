import { type Temporal } from '@js-temporal/polyfill';

export type GeschlechtType = 'M'| 'W';

export type Familienstand = 'L' | 'VH'|'G'|'VM';

export type InteressenType = 'S' | 'L'| 'R';

/**
 * Model als Plain-Old-JavaScript-Object (POJO) fuer die Daten *UND*
 * Functions fuer Abfragen und Aenderungen.
 */
export interface Kunde {
    id?: string;
    version?: number;
    nachname: string;
    email: string;
    //TODO hier mit | undefined oder 0 --> mit Zahlen etc
    kategorie: number | 0;
    newsletter: boolean | false;
    geburtsdatum: Temporal.PlainDate | undefined;
    // TODO Url als type nicht vorhanden --> deshalb string
    homepage: string| undefined;
    geschlecht:GeschlechtType | undefined;
    familienstand:Familienstand | undefined;
    interessen: InteressenType[] | undefined;
    // TODO Umsatz hat id, betrag und währung --> In neue Klasse umschreiben
    umsatz: number| undefined;
    // TODO adresse hat PLZ und Ort
    adresse: string;
    userName:string;
    //TODO brauche ich erzeigt und aktualisiert



}

/**
 * Gemeinsame Datenfelder unabh&auml;ngig, ob die Buchdaten von einem Server
 * (z.B. RESTful Web Service) oder von einem Formular kommen.
 * Verwendung in den Interfaces:
 * - BuchServer für BuchReadService
 * - BuchForm für CreateBuchComponent
 */
export interface BuchShared {
    nachname: string;
    email: string;
    kategorie: number | 0;
    newsletter: boolean | false;
    geburtsdatum: Temporal.PlainDate | undefined;
    homepage: string| undefined;
    geschlecht:GeschlechtType | undefined;
    familienstand:Familienstand | undefined;
    interessen: InteressenType[] | undefined;
    umsatz: number| undefined;
    adresse: string;
}
