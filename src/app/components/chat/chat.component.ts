import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Message } from '../../Interfaces/Message';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public messages: Message[] = [];
  private messageSubscription: Subscription;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      message: new FormControl('', [Validators.minLength(1)])
    });
    this.messageSubscription = this.getMessage$.subscribe((message: Message) => this.messages.push(message));
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
  }

  public sentMessage(): void {
    const { message } = this.form.value;
    const msg = { from: 'Law', message };
    this.chatService.sendMessage(msg);
    this.form.reset();
  }

  get getMessage$(): Observable<Message> {
    return this.chatService.listenNewMessage();
  }

}
