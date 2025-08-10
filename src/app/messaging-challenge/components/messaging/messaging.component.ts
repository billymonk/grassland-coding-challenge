import { Component, OnDestroy } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { Observable, Subscription } from 'rxjs';
import { Message } from '../../models/message';
import { TextMessage } from '../../models/text-message';
import { ImageMessage } from '../../models/image-message';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnDestroy {
  public messages: Message[] = [];
  private messageSubscription: Subscription;

  constructor(private messagingService: MessagingService) {
    this.messageSubscription = this.messagingService.messages$.subscribe(message => {
      this.messages.push(message);
    });
  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  isTextMessage(message: Message): message is TextMessage {
    return message instanceof TextMessage;
  }

  isImageMessage(message: Message): message is ImageMessage {
    return message instanceof ImageMessage;
  }
}
