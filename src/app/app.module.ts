import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsModule } from './icons/icons.module';
import { InitiativeModule } from './modules/initiative/initiative.module';
import { MonstersModule } from './modules/monsters/monsters.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IconsModule,
    InitiativeModule,
    MonstersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
