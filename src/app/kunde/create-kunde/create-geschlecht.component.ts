import { Component, Input, type OnInit } from "@angular/core";
import { FormControl, type FormGroup } from "@angular/forms";
import log from "loglevel";

/**
 * Komponente mit dem Tag &lt;hs-create-geschlecht&gt;, um das Erfassungsformular
 * f&uuml;r einen neuen Kunden zu realisieren.
 */
@Component({
  selector: "hs-create-geschlecht",
  templateUrl: "./create-geschlecht.component.html",
})
export class CreateGeschlechtComponent implements OnInit {
  @Input()
  createForm!: FormGroup;

  readonly geschlecht = new FormControl("W");

  ngOnInit() {
    log.debug("CreateGeschlechtComponent.ngOnInit");
    // siehe formControlName innerhalb @Component({templateUrl: ...})
    this.createForm.addControl("geschlecht", this.geschlecht);
  }
}
