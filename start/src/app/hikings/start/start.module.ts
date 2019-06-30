import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Padstart0Pipe } from '../../pipes/padstart0.pipe';


import { IonicModule } from '@ionic/angular';

import { StartPage } from './start.page';
import { TimerComponent } from '../timer/timer.component';

const routes: Routes = [
  {
    path: '',
    component: StartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StartPage, TimerComponent, Padstart0Pipe]
})
export class StartPageModule {}
