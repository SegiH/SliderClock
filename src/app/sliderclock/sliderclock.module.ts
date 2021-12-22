import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SliderClockPage } from './sliderclock.page';

import { HomePageRoutingModule } from './sliderclock-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [SliderClockPage]
})
export class SliderClockPageModule {}
