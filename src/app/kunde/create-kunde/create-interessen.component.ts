import { Component, Input, type OnInit } from "@angular/core";
import { FormControl, type FormGroup } from "@angular/forms";
import log from "loglevel";

/**
 * Komponente mit dem Tag hs-create-interessen;, um das Erfassungsformular
 * f&uuml;r ein neuen Kunden zu realisieren.
 */
@Component({
  selector: "hs-create-interessen",
  templateUrl: "./create-interessen.component.html",
})
export class CreateInteressenComponent implements OnInit {
  @Input()
  createForm!: FormGroup;

  readonly S = new FormControl(false);

  readonly L = new FormControl(false);

  readonly R = new FormControl(false);

  ngOnInit() {
    log.debug("CreateSchlagwoerterComponent.ngOnInit");
    // siehe formControlName innerhalb @Component({templateUrl: ...})
    this.createForm.addControl("S", this.S);
    this.createForm.addControl("L", this.L);
    this.createForm.addControl("R", this.R);
  }
}
