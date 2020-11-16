import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';
import { AngularCommunicationComponent } from './angular-communication/angular-communication.component';
import { MediatorService } from './services/mediator.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    PageNotFoundComponent,
    VirtualScrollingComponent,
    AngularCommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScrollingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    MediatorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


