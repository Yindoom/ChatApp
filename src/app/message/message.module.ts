import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageRoutingModule } from './message-routing.module';
import { ListMessagesComponent } from './list-messages/list-messages.component';

@NgModule({
  declarations: [ListMessagesComponent],
  imports: [
    CommonModule,
    MessageRoutingModule
  ]
})
export class MessageModule { }
