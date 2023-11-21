import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAgendaPage } from './my-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: MyAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAgendaPageRoutingModule {}
