import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule } from 'ngx-socket-io';
import { NgModule } from '@angular/core';

import { environment as ENV } from '../environments/environment';

import { AppComponent } from './app.component';
import { ChatModule } from './modules/chat/chat.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { MessagesModule } from './modules/messages/messages.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    SharedModule,
    AuthModule,
    MessagesModule,
    SocketIoModule.forRoot({ url: ENV.webSocketServer, options: {} }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
