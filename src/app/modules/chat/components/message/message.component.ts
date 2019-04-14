import { Component, Input } from '@angular/core';

import { Message } from '../../entities/message';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent {

  @Input() message: Message;

  constructor() { }

}
