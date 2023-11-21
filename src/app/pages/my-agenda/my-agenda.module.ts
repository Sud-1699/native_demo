import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAgendaPageRoutingModule } from './my-agenda-routing.module';

import { MyAgendaPage } from './my-agenda.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAgendaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyAgendaPage]
})
export class MyAgendaPageModule {}
