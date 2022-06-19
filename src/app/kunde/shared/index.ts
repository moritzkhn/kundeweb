/*
 * Copyright (C) 2016 - present Juergen Zimmermann, Hochschule Karlsruhe
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

export {
  type Kunde,
  type KundeShared,
  type GeschlechtType,
  type InteressenType,
  type FamilienstandType,
} from "./kunde";
export {
  KundeReadService,
  type KundeServer,
  type Suchkriterien,
} from "./kundeRead.service";
export { KundeWriteService } from "./kundeWrite.service";
export { FindError, SaveError, UpdateError, RemoveError } from "./errors";
