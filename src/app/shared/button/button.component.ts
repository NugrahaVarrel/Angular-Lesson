import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'submit dari child';
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit('ini data dari child');
  }
}
