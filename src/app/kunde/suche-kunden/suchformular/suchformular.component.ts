import { type InteressenType, type GeschlechtType } from '../../shared/kunde';
import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { type Suchkriterien } from '../../shared';
import { fadeIn } from '../../../shared';
import log from 'loglevel';

/**
 * Komponente f&uuml;r das Tag <code>hs-suchformular</code>
 */
@Component({
    selector: 'hs-suchformular',
    templateUrl: './suchformular.component.html',
    animations: [fadeIn],
})
export class SuchformularComponent {
    @Output()
    readonly suchkriterien$ = new Subject<Suchkriterien>();

    #nachname = '';

    #interessen: InteressenType | '' = '';

    #geschlecht: GeschlechtType | '' = '';


    // DI: Constructor Injection (React hat uebrigens keine DI)
    // Empfehlung: Konstruktor nur fuer DI
    constructor() {
        log.debug('SuchformularComponent.constructor()');
    }

    setNachname(nachname: string) {
        log.debug('SuchformularComponent.setNachname', nachname);
        this.#nachname = nachname;
    }

    setGeschlecht(geschlecht: string) {
        log.debug('SuchformularComponent.setGeschlecht', geschlecht);
        this.#geschlecht = geschlecht as GeschlechtType;
    }

    setInteressen(interessen: string) {
        log.debug('SuchformularComponent.setInteressen', interessen);
        this.#interessen = interessen as InteressenType;
    }

    

    /**
     * Suche nach B&uuml;chern, die den spezfizierten Suchkriterien entsprechen
     * @return false, um das durch den Button-Klick ausgel&ouml;ste Ereignis
     *         zu konsumieren.
     */
    onSubmit() {
        log.debug(
            'SuchformularComponent.onSubmit: nachname / geschlecht / interessen',
            this.#nachname,
            this.#geschlecht,
            this.#interessen,
        );

        this.suchkriterien$.next({
            nachname: this.#nachname,
            geschlecht: this.#geschlecht,
            interessen: this.#interessen,
        });

        // Inspektion der Komponente mit dem Tag-Namen "app" im Debugger
        // Voraussetzung: globale Variable ng deklarieren (s.o.)
        // const app = document.querySelector('app')
        // global.ng.probe(app)

        // damit das (Submit-) Ereignis konsumiert wird und nicht an
        // uebergeordnete Eltern-Komponenten propagiert wird bis zum
        // Refresh der gesamten Seite.
        return false;
    }
}