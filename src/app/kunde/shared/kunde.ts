import { type Temporal } from '@js-temporal/polyfill';

export type GeschlechtType = 'DIVERS' | 'MAENNLICH' | 'WEIBLICH';

export type FamilienstandType =
    | 'GESCHIEDEN'
    | 'LEDIG'
    | 'VERHEIRATET'
    | 'VERWITWET';

export type InteressenType = 'LESEN' | 'REISEN' | 'SPORT';
export interface Umsatz {
    id?: string | null;
    betrag: number;
    waehrung: string;
}
export interface Adresse {
    id?: string | null;
    plz: string;
    ort: string;
}

export interface User {
    username: string;
    password: string;
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
    kategorie: number | undefined;
    newsletter: boolean | undefined;
    geburtsdatum: Temporal.PlainDate | undefined;
    homepage: string | undefined;
    geschlecht: GeschlechtType | undefined;
    familienstand: FamilienstandType | undefined;
    interessen?: InteressenType | undefined;
    umsatz: Umsatz | undefined;
    adresse: Adresse;
    user: User | undefined;
    /*
    userName: string;
    erzeugt:  Temporal.PlainDate; //TODO aktuelles Daatum + Zeit
    aktualisiert: Temporal.PlainDate;  //TODO aktuelles Daatum + Zeit
    */
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
    kategorie?: number | undefined;
    newsletter?: boolean;
    homepage?: string | undefined;
    interessen?: InteressenType | null;
    geschlecht: GeschlechtType | undefined;
    familienstand: FamilienstandType | undefined;
    umsatz: Umsatz | undefined;
    adresse: Adresse;
}
