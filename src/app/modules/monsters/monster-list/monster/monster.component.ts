import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monster } from '../../../../services/monsters.service';


@Component({
  selector: 'monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent {

  /**
   * The monster to be displayed.
   */
  @Input() monster!: Monster;

  /**
   * This event is triggered when Monster's health is modified.
   */
  @Output() updateMonsterHealthEvent = new EventEmitter<Monster>();

  // Form data used when changing creature health.
  adjustHealthBy: number|null = null;
  currentHP: number = 0;
  maxHP: number = 0;

  /**
   * Handles adding damage to Monster health.
   */
  damageMonster() {
    // Subtract damage from Monster's current HP
    this.currentHP = this.monster.currentHP - (this.adjustHealthBy || 0);

    // Ensure HP doesn't fall below 0
    if (this.currentHP < 0) {
      this.currentHP = 0;
    }

    this.updateMonsterHealthEvent.emit({
      ...this.monster, currentHP: this.currentHP
    })

    // Clear the input value
    this.adjustHealthBy = null;
  }

  /**
   * Handles healing Monster health.
   */
  healMonster() {
    this.maxHP = this.monster.maxHP;

    // Add healing to Monster's current HP
    this.currentHP = this.monster.currentHP + (this.adjustHealthBy || 0);

    // Ensure HP does not go above max HP
    if (this.currentHP > this.maxHP) {
      this.currentHP = this.maxHP;
    }

    this.updateMonsterHealthEvent.emit({
      ...this.monster, currentHP: this.currentHP
    })

    // Clear the input value
    this.adjustHealthBy = null;
  }

}
