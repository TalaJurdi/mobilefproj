import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleepingtipsPage } from './sleepingtips.page';

const routes: Routes = [
  {
    path: '',
    component: SleepingtipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleepingtipsPageRoutingModule {}
