import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MonstersRoutingModule } from './monsters-routing.module';
import { MonstersComponent } from './monsters.component';
import { AddMonsterComponent } from './add-monster/add-monster.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { MonsterComponent } from './monster-list/monster/monster.component';


@NgModule({
  declarations: [
    MonstersComponent,
    AddMonsterComponent,
    MonsterListComponent,
    MonsterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MonstersRoutingModule
  ],
  exports: [
    MonstersComponent
  ]
})
export class MonstersModule { }
