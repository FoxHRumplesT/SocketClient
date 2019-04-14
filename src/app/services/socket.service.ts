import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public socketConnected = false;

  constructor(private socket: Socket) {
    this.socketStatus();
  }

  public emit(event: string, payload?: any, callback?: typeof Function): void {
    this.socket.emit(event, payload, callback);
  }

  public listen<T>(event: string): Observable<T> {
    return this.socket.fromEvent<T>(event);
  }

  private socketStatus(): void {
    this.socket.on('connect', () => {
      this.socketConnected = true;
    });

    this.socket.on('disconnect', () => {
      this.socketConnected = false;
    });
  }
}
