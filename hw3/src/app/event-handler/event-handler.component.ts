import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-handler',
  templateUrl: './event-handler.component.html',
  styleUrls: ['./event-handler.component.css']
})
export class EventHandlerComponent {
  @Output() messageChange = new EventEmitter<string>();

  constructor() { }

  showMessage(): void {
    const newMessage = 'Button clicked!';
    this.messageChange.emit(newMessage);
  }
}
