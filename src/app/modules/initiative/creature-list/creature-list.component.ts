import { Component } from '@angular/core';
import { InitiativeService } from '../../../services/initiative.service';


@Component({
  selector: 'creature-list',
  templateUrl: './creature-list.component.html',
  styleUrls: ['./creature-list.component.scss']
})
export class CreatureListComponent {

  constructor(
    public initiativeService: InitiativeService
  ) { }

}