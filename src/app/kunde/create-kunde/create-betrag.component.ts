import { Component, Input, type OnInit } from "@angular/core";
import { FormControl, type FormGroup, Validators } from "@angular/forms";
import log from "loglevel";

/**
 * Komponente mit dem Tag &lt;hs-create-betrag&gt;, um das Erfassungsformular
 * f&uuml;r ein neuen Kunden zu realisieren.
 */
@Component({
  selector: "hs-create-betrag",
  templateUrl: "./create-betrag.component.html",
})
export class CreateBetragComponent implements OnInit {
  @Input()
  createForm!: FormGroup;

  readonly betrag = new FormControl(undefined, Validators.required);

  ngOnInit() {
    log.debug("CreateBetragComponent.ngOnInit");
    // siehe formControlName innerhalb @Component({templateUrl: ...})
    this.createForm.addControl("betrag", this.betrag);
  }
}
