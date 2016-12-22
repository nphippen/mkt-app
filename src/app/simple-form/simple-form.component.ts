import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
      <input 
        #myInput type="text" 
        [(ngModel)]="message"
        [ngClass]="{mousedown:isMousedown}"
        (mousedown)="isMousedown = true"
        (mouseup)="isMousedown = fasle"
        (mouseleave)="isMousedown = fasle"
        >
      <button (click)="update.emit({text:message})">Click Me!</button>
  `,
  styles: [`
    class="row input-field col s6"
    :host{
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    .mousedown{
      border: 2px solid green;
    }
    input:focus{
      font-weight: bold;
      outline: none;
    }
    button{
      border:none;
    }
    `]
})
export class SimpleFormComponent implements OnInit {
  
  isMousedown;
  
  @Input() message;
  
  @Output() update = new EventEmitter();
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
