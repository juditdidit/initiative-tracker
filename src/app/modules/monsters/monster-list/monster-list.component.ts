import { Component } from '@angular/core';
import { MonstersService } from '../../../services/monsters.service';


@Component({
  selector: 'monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.scss']
})
export class MonsterListComponent {

  constructor(
    public monstersService: MonstersService
  ) { }

}
