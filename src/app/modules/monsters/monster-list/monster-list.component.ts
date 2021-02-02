import { Component } from '@angular/core';
import { Monster, MonstersService } from '../../../services/monsters.service';


@Component({
  selector: 'monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent {

  constructor(
    public monstersService: MonstersService
  ) { }

  /**
   * Return the unique ID of Monster.
   *
   * @param index The current Monster's index.
   * @param monster The unique Monster.
   */
  getMonsterID(index: number, monster: Monster) {
    return monster.id;
  }

}
