import { Injectable } from '@angular/core';

export interface Monster {
  id: number;
  name: string;
  currentHP: number;
  maxHP: number;
}

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  readonly monstersArr: Monster[] = [
    {id: 0, name: 'Kraken', currentHP: 50, maxHP: 100},
    {id: 1, name: 'Karen', currentHP: 49, maxHP: 100},
    {id: 2, name: 'Rachel', currentHP: 25, maxHP: 100}
  ];

  /**
   * Keeps a counter in order to assign a unique ID per Monster added.
   */
  monsterCounter: number = 2;
  increaseMonsterCounter() {
    this.monsterCounter += 1;
  }

  /**
   * Add a new monster to the monsters list.
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