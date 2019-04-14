import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SocketService } from 'src/app/services/socket.service';
import { Message } from '../entities/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socketService: SocketService) { }

  public listenNewMessage(): Observable<Message> {
    return this.socketService.listen('new-message');
  }

  public sendMessage(message: Message): void {
    this.socketService.emit('message', message);
  }
}
