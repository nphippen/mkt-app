import {
  Component,
  Inject
}
from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Thunder dome!';

  onUpdate(id, text){
    this.mail.update(id,text);
  }
  
  constructor(
     @Inject('mail') private mail
    ) {}
}
