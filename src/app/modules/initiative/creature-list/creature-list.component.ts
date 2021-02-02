import { Component } from '@angular/core';
import { Creature, InitiativeService } from '../../../services/initiative.service';


@Component({
  selector: 'creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss']
})
export class CreatureListComponent {

  constructor(
    public initiativeService: InitiativeService
  ) { }

  /**
   * Return the unique ID of Creature.
   *
   * @param index The current Creature's index.
   * @param creature The unique Creature.
   */
  getCreatureID(index: number, creature: Creature) {
    return creature.id;
  }

}