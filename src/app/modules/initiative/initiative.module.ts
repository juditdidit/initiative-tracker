import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { InitiativeRoutingModule } from './initiative-routing.module';
import { AddCreatureComponent } from './add-creature/add-creature.component';
import { CreatureListComponent } from './creature-list/creature-list.component';
import { CreatureComponent } from './creature-list/creature/creature.component';
import { InitiativeComponent } from './initiative.component';
import { IconsModule } from 'src/app/icons/icons.module';


@NgModule({
  declarations: [
    AddCreatureComponent,
    CreatureListComponent,
    CreatureComponent,
    InitiativeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InitiativeRoutingModule,
    IconsModule
  ],
  exports: [
    InitiativeComponent,
  ]
})
export class InitiativeModule { }
