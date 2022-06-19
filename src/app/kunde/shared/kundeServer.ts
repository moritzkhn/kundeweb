import { type Kunde, type KundeShared, type InteressenType } from "./kunde";
import { Temporal } from "@js-temporal/polyfill";
import log from "loglevel";

interface Link {
  href: string;
}

/**
 * Daten vom und zum REST-Server:
 * <ul>
 *  <li> Arrays f&uuml;r mehrere Werte, die in einem Formular als Checkbox
 *       dargestellt werden.
 *  <li> Daten mit Zahlen als Datentyp, die in einem Formular nur als
 *       String handhabbar sind.
 * </ul>
 */
export interface KundeServer extends KundeShared {
  kategorie?: number;
  geburtsdatum?: string;
  interessen?: InteressenType;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _links?: {
    self: Link;
    list?: Link;
    add?: Link;
    update?: Link;
    remove?: Link;
  };
}

/**
 * Ein Kunde-Objekt mit JSON-Daten erzeugen, die von einem RESTful Web
 * Service kommen.
 * @param kunde JSON-Objekt mit Daten vom RESTful Web Server
 * @return Das initialisierte Kunde-Objekt
 */
// eslint-disable-next-line max-lines-per-function
export const toKunde = (kundeServer: KundeServer, etag?: string) => {
  let selfLink: string | undefined;
  const { _links } = kundeServer; // eslint-disable-line @typescript-eslint/naming-convention
  if (_links !== undefined) {
    const { self } = _links;
    selfLink = self.href;
  }
  let id: string | undefined;
  if (selfLink !== undefined) {
    const lastSlash = selfLink.lastIndexOf("/");
    id = selfLink.slice(lastSlash + 1);
  }

  let version: number | undefined;
  if (etag !== undefined) {
    // Anfuehrungszeichen am Anfang und am Ende entfernen
    const versionStr = etag.slice(1, -1);
    version = Number.parseInt(versionStr, 10);
  }

  const {
    nachname,
    email,
    kategorie,
    newsletter,
    geburtsdatum,
    homepage,
    geschlecht,
    familienstand,
    interessen,
    umsatz,
    adresse,
  } = kundeServer;

  let geburtsdatumTemporal: Temporal.PlainDate | undefined;
  // TODO Parsing, ob der Datum-String valide ist
  if (geburtsdatum !== undefined) {
    const [yearStr, monthStr, dayStr] = geburtsdatum
      .replace(/T.*/gu, "")
      .split("-");
    const year = Number(yearStr);
    const month = Number(monthStr);
    const day = Number(dayStr);
    geburtsdatumTemporal = new Temporal.PlainDate(year, month, day);
  }

  const kunde: Kunde = {
    id,
    nachname: nachname ?? "unbekannt",
    email,
    kategorie,
    newsletter,
    geburtsdatum: geburtsdatumTemporal,
    homepage,
    geschlecht,
    familienstand,
    interessen,
    umsatz,
    adresse,
    version,
  };
  log.debug("Kunde.fromServer: kunde=", kunde);
  return kunde;
};

/**
 * Konvertierung des Kundeobjektes in ein JSON-Objekt f&uuml;r den RESTful
 * Web Service.
 * @return Das JSON-Objekt f&uuml;r den RESTful Web Service
 */
export const toKundeServer = (kunde: Kunde): KundeServer => {
  const geburtsdatum =
    kunde.geburtsdatum === undefined
      ? undefined
      : kunde.geburtsdatum.toString();
  return {
    nachname: kunde.nachname,
    email: kunde.email,
    kategorie: kunde.kategorie,
    newsletter: kunde.newsletter,
    geburtsdatum,
    homepage: kunde.homepage,
    geschlecht: kunde.geschlecht,
    familienstand: kunde.familienstand,
    interessen: kunde.interessen,
    umsatz: kunde.umsatz,
    adresse: kunde.adresse
  };
};
