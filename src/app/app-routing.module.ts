
import { MessageListComponent } from './view/message-list/message-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoComponent } from './todo/todo.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'vscroll',
    component: VirtualScrollingComponent
  },
  {
    path: 'view',
    component: MessageListComponent
  },

  {
    path: 'comm',
    loadChildren: () => import('./angular-communication/angular-communication.module')
      .then(m => m.AngularCommunicationModule)
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.module')
      .then(m => m.ParentModule)
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
