import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyOfficeAgendaPage } from './my-office-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: MyOfficeAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOfficeAgendaPageRoutingModule {}
