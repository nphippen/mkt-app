import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
    messages = [
        {id: 0, text:'holy shit'},
        {id: 1, text:'you\'re cool'},
        {id: 2, text:'BLAH BLAH'}
        ];
    message = "you've got mail!";
    
    update(id, text){
        this.messages = this.messages.map(m=>
        m.id === id
            ?{id,text}
            :m
        )
    }
  constructor() { }

}
