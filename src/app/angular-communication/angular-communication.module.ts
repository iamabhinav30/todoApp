import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularCommunicationRoutingModule } from './angular-communication-routing.module';
import { ViewJokeListComponent } from './view-joke-list/view-joke-list.component';

@NgModule({
  declarations: [
    ViewJokeListComponent
  ],
  imports: [
    CommonModule,
    AngularCommunicationRoutingModule
  ]
})
export class AngularCommunicationModule { }
