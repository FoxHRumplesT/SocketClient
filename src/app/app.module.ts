import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment as ENV } from '../environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/chat/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot({ url: ENV.webSocketServer, options: {} })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
