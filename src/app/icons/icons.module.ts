import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconSkullComponent } from './icon-skull/icon-skull.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconPotionComponent } from './icon-potion/icon-potion.component';
import { IconTrashComponent } from './icon-trash/icon-trash.component';

@NgModule({
  declarations: [
    IconSkullComponent,
    IconEditComponent,
    IconPotionComponent,
    IconTrashComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    IconSkullComponent,
    IconEditComponent,
    IconPotionComponent,
    IconTrashComponent,
  ]
})
export class IconsModule { }
