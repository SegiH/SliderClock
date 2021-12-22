import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderClockPage } from './sliderclock.page';

const routes: Routes = [
  {
    path: '',
    component: SliderClockPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
