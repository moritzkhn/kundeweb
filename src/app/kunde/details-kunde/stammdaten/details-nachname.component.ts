import { Component, Input, type OnInit } from "@angular/core";
import log from "loglevel";

/**
 * Komponente f&uuml;r das Tag <code>hs-details-nachname</code>
 */
@Component({
  selector: "hs-details-nachname",
  templateUrl: "./details-nachname.component.html",
})
export class DetailsNachnameComponent implements OnInit {
  @Input()
  nachname!: string;

  ngOnInit() {
    log.debug("DetailsNachnameComponent.nachname=", this.nachname);
  }
}
