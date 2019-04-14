import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ChatComponent,
    MessageComponent
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
