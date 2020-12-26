import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Creature, CREATURE_TYPE } from '../../../../services/initiative.service';


@Component({
  selector: 'creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.scss']
})
export class CreatureComponent {

  /**
   * Creature to be displayed.
   */
  @Input() creature!: Creature;

  /**
   * This event is triggered when Creature is modified.
   */
  @Output() updateCreatureEvent = new EventEmitter<Creature>();
  /**
   * This event is triggered when Creature is deleted.
   */
  @Output() removeCreatureEvent = new EventEmitter<null>();

  // Indicates whether the component is in editing mode.
  editingCreature = false;

  // Form data used when updating Creature.
  updatedCreatureName = 'Nameless';
  updatedCreatureRoll = 0;
  updatedCreatureType: CREATURE_TYPE = 'neutral';

  // Methods
  /**
   * Handles the removal of the current Creature.
   */
  removeCreature() {
    this.removeCreatureEvent.emit();
  }

  /**
   * Sets the component into editing mode.
   */
  editCreature() {
    this.editingCreature = true;

    // Get current creature's stats
    this.updatedCreatureName = this.creature.name;
    this.updatedCreatureRoll = this.creature.roll;
    this.updatedCreatureType = this.creature.type;
  }

  /**
   * Handles updating Creature with the data in the form.
   */
  updateCreature() {
    this.updateCreatureEvent.emit({
      ...this.creature,
      name: this.updatedCreatureName,
      roll: this.updatedCreatureRoll,
      type: this.updatedCreatureType,
    })
    this.stopEdit();
  }

  /**
   * Takes the component out of editing mode.
   */
  stopEdit() {
    this.editingCreature = false;
  }

  /**
   * Handles updating Creature, toggling its dead status.
   */
  toggleDeadStatus() {
    this.updateCreatureEvent.emit({
      ...this.creature, dead: !this.creature.dead
    });
  };

}
