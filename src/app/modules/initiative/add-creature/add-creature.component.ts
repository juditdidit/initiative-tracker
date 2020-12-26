import { Component } from '@angular/core';
import { CREATURE_TYPE, InitiativeService } from '../../../services/initiative.service';


@Component({
  selector: 'add-creature',
  templateUrl: './add-creature.component.html',
  styleUrls: ['./add-creature.component.scss']
})
export class AddCreatureComponent {

  // The form data
  creatureName: string = '';
  creatureRoll: number | null = null;
  creatureType: CREATURE_TYPE = 'neutral';

  constructor(
    private initiativeService: InitiativeService
  ) { }

  /**
   * Adds Creature data to the initiative list.
   */
  addCreature() {
    this.initiativeService.addCreature({
      name: this.creatureName || 'Nameless',
      roll: this.creatureRoll || 0,
      type: this.creatureType,
      dead: false,
    });

    // Clear the input values
    this.creatureName = '';
    this.creatureRoll = null;
    this.creatureType = "neutral";
  }

}
