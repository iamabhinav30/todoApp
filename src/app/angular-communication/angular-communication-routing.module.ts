import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewJokeListComponent } from './view-joke-list/view-joke-list.component';

const routes: Routes = [
  {
    path: 'view-jokes', component: ViewJokeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularCommunicationRoutingModule { }
