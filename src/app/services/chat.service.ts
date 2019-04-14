import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SocketService } from './socket.service';
import { Message } from '../Interfaces/Message';

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
