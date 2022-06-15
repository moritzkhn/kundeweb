import { type Kunde, type KundeShared } from "../shared";
import { Temporal } from "@js-temporal/polyfill";
import log from "loglevel";

/**
 * Daten aus einem Formular:
 * <ul>
 *  <li> je 1 Control fuer jede Checkbox und
 *  <li> au&szlig;erdem Strings f&uuml;r Eingabefelder f&uuml;r Zahlen.
 * </ul>
 */
export interface KundeForm extends KundeShared {
  kategorie: string;
  geburtsdatum: Date;
  javascript: boolean;
  typescript: boolean;
}

/**
 * Ein Kunde-Objekt mit JSON-Daten erzeugen, die von einem Formular kommen.
 * @param kunde JSON-Objekt mit Daten vom Formular
 * @return Das initialisierte Kunde-Objekt
 */
export const toKunde = (kundeForm: KundeForm) => {
  log.debug("toKunde: kundeForm=", kundeForm);

  const {
    nachname,
    email,
    kategorie,
    newsletter,
    geburtsdatum,
    interessen,
    homepage,
    geschlecht,
    familienstand,
    umsatz,
    adresse,
    javascript,
    typescript,
  } = kundeForm;

  const kategorieNumber = Number(kategorie);

  const geburtsdatumTemporal = new Temporal.PlainDate(
    geburtsdatum.getFullYear(),
    geburtsdatum.getMonth() + 1,
    geburtsdatum.getDate()
  );
  log.debug("toKunde: geburtsdatumTemporal=", geburtsdatumTemporal);

  const kunde: Kunde = {
    nachname: nachname ?? "unbekannt",
    email,
    kategorie :kategorieNumber,
    newsletter,
    geburtsdatum: geburtsdatumTemporal,
    homepage,
    geschlecht,
    familienstand,
    interessen,
    umsatz,
    adresse,
    version: 0,
  };
  log.debug("toKunde: kunde=", kunde);
  return kunde;
};
