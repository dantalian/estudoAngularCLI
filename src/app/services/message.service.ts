import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(msg: string) {
    this.messages.push(msg);
  }

  delete(msg: string) {
    this.messages.splice(this.messages.indexOf(msg), 1);
  }

}
