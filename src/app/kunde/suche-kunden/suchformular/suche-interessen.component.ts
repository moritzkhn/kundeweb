import { Component, Output } from "@angular/core";
import { type InteressenType } from "../../shared/kunde";
import { Subject } from "rxjs";
import log from "loglevel";

/**
 * Komponente f&uuml;r das Tag <code>hs-suche-titel</code>
 */
@Component({
  selector: "hs-suche-interessen",
  templateUrl: "./suche-interessen.component.html",
})
export class SucheInteressenComponent {
  interessen: InteressenType | "" = "";

  @Output()
  readonly interessen$ = new Subject<InteressenType | "">();

  constructor() {
    log.debug("SucheInteressenComponent.constructor()");
  }

  onChange(event: Event) {
    const { value } = event.target as HTMLInputElement;
    log.debug(`SucheInteressenComponent.onChange: interessen=${value}`);
    this.interessen$.next(value as InteressenType | "");
  }
}
