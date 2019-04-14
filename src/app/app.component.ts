import { Component } from '@angular/core';

import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(private socketService: SocketService) {}

  get socketStatus(): boolean {
    return this.socketService.socketConnected;
  }
}
