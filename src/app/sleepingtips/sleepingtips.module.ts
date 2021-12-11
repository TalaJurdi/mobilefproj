import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepingtipsPageRoutingModule } from './sleepingtips-routing.module';

import { SleepingtipsPage } from './sleepingtips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleepingtipsPageRoutingModule
  ],
  declarations: [SleepingtipsPage]
})
export class SleepingtipsPageModule {}
