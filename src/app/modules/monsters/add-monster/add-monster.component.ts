import { Component } from '@angular/core';
import { MonstersService } from '../../../services/monsters.service';


@Component({
  selector: 'add-monster',
  templateUrl: './add-monster.component.html',
  styleUrls: ['./add-monster.component.scss']
})
export class AddMonsterComponent {

  // The form data
  monsterName: string = '';
  monsterHealth: number|null = null;

  constructor(
    private monstersService: MonstersService
  ) { }

  /**
   * Adds the monster data to the monsters list.
   */
  addMonster() {
    this.monstersService.addMonster({
      name: this.monsterName || "Abominable Monster",
      currentHP: this.monsterHealth || 0,
      maxHP: this.monsterHealth || 0
    });

    // Clear the input values
    this.monsterName = '';
    this.monsterHealth = null;
  }

}