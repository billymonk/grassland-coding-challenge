import { Component } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { Observable } from 'rxjs';
import { Message } from '../../models/message';

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
}
