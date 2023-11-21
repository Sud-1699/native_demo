import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOfficeAgendaPageRoutingModule } from './my-office-agenda-routing.module';

import { MyOfficeAgendaPage } from './my-office-agenda.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyOfficeAgendaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyOfficeAgendaPage]
})
export class MyOfficeAgendaPageModule {}
