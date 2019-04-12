import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public socketConnected = false;

  constructor(private socket: Socket) {
    this.socketStatus();
  }

  private socketStatus(): void {
    this.socket.on('connect', () => {
      console.log('Socket client connected');
      this.socketConnected = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Socket client disconnected');
      this.socketConnected = false;
    });
  }
}
