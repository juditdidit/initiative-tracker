import { Injectable } from '@angular/core';

export type CREATURE_TYPE = 'good' | 'bad' | 'neutral';

export interface Creature {
  name: string;
  roll: number;
  type: CREATURE_TYPE;
  dead: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class InitiativeService {

  readonly creaturesArr: Creature[] = [
    { name: 'Greg', roll: 15, type: 'neutral', dead: false },
    { name: 'Jak', roll: 5, type: 'good', dead: false },
    { name: 'Sammy', roll: 3, type: 'neutral', dead: true },
    { name: 'Jynx', roll: 1, type: 'bad', dead: false }
  ]

  /**
   * Adds a creature to the initiative list.
   *
   * @param newCreature The Creature to be added.
   */
  addCreature(creature: Creature): void {
    this.creaturesArr.push(creature);
    this.sortCreatures();
  }

  /**
   * Removes Creature at the specified index from the initiative list.
   *
   * @param index The index of the creature to be removed.
   */
  removeCreature(index: number): void {
    this.creaturesArr.splice(index, 1);
  }

  /**
   * Empties the initiative list of all creatures.
   */
  removeAllCreatures(): void {
    this.creaturesArr.splice(0);
  }

  /**
   * Updates Creature at the specified index in the initiative list
   * with new information. Only the properties being modified need to be
   * specified.
   *
   * @param index The index of the creature to update.
   * @param updatedCreature The new values for the creature.
   */
  updateCreature(index: number, updatedCreature: Partial<Creature>): void {
    this.creaturesArr[index] = { ...this.creaturesArr[index], ...updatedCreature };
    this.sortCreatures();
  }

  /**
   * Sorts the creatures according to their initiative roll.
   */
  private sortCreatures(): void {
    this.creaturesArr.sort((a, b) => b.roll - a.roll);
  }

}
