import { Component, OnInit } from '@angular/core';
import {MessageService} from '../shared/message.service';
import {Message} from '../shared/message.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.scss']
})
export class ListMessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  messages: Observable<Message[]>;
  ngOnInit() {
  }

}
