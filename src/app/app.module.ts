import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule } from 'ngx-socket-io';
import { NgModule } from '@angular/core';

import { environment as ENV } from '../environments/environment';

import { AppComponent } from './app.component';
import { ChatModule } from './modules/chat/chat.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    SharedModule,
    SocketIoModule.forRoot({ url: ENV.webSocketServer, options: {} })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
