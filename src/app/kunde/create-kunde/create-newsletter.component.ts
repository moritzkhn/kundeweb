/*
 * Copyright (C) 2015 - present Juergen Zimmermann, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Component, Input, type OnInit } from "@angular/core";
import { FormControl, type FormGroup } from "@angular/forms";
import log from "loglevel";

/**
 * Komponente mit dem Tag &lt;hs-create-newsletter&gt;, um das Erfassungsformular
 * f&uuml;r einen neuen Kunden zu realisieren.
 */
@Component({
  selector: "hs-create-newsletter",
  templateUrl: "./create-newsletter.component.html",
})
export class CreateNewsletterComponent implements OnInit {
  @Input()
  createForm!: FormGroup;

  readonly newsletter = new FormControl(false);

  ngOnInit() {
    log.debug("CreateNewsletterComponent.ngOnInit");
    // siehe formControlName innerhalb @Component({templateUrl: ...})
    this.createForm.addControl("newsletter", this.newsletter);
  }
}
