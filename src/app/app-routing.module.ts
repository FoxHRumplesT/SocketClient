import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/auth/components/login/login.component';
import { MessagesComponent } from './modules/messages/components/messages/messages.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
