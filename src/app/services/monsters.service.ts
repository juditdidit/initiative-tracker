import { Injectable } from '@angular/core';

export interface Monster {
  name: string;
  currentHP: number;
  maxHP: number;
}

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  readonly monstersArr: Monster[] = [
    {name: 'Kraken', currentHP: 50, maxHP: 100},
    {name: 'Karen', currentHP: 49, maxHP: 100},
    {name: 'Rachel', currentHP: 25, maxHP: 100}
  ];

  /**
   * Add a monster to the monsters list.
   *
   * @param newMonster The Monster to be added.
   */
  addMonster(newMonster: Monster) {
    this.monstersArr.push(newMonster);
  }

  /**
   * Empties the monster list of all monsters.
   */
  removeAllMonsters(): void {
    this.monstersArr.splice(0);
  }

  /**
   * Adjust Monster health based on healing or damage taken.
   *
   * @param index The index of the monster to update.
   * @param updatedMonster The new values for the monster.
   */
  updateMonsterHealth(index: number, updatedMonster: Partial<Monster>): void {
    this.monstersArr[index] = { ...this.monstersArr[index], ...updatedMonster };
  }

}