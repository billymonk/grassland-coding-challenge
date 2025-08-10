import { Component } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';
import { TextMessage } from '../../models/text-message';
import { ImageMessage } from '../../models/image-message';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent {
  messages$: Observable<Message[]>;

  constructor(private messagingService: MessagingService) {
    this.messages$ = this.messagingService.messages$;
  }

  isTextMessage(message: Message): message is TextMessage {
    return message instanceof TextMessage;
  }

  isImageMessage(message: Message): message is ImageMessage {
    return message instanceof ImageMessage;
  }
}
