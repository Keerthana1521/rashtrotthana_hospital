import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-more-btn',
  templateUrl: './read-more-btn.component.html',
  styleUrl: './read-more-btn.component.css'
})
export class ReadMoreBtnComponent {
  @Output() onClick = new EventEmitter<void>();
  @Input() text: string = 'Read More';
  @Input() background: string = 'linear-gradient(90deg, #022b50 0%, #279797 100%)';
  @Input() boxShadow: string = '3px 4px 15px rgba(63, 176, 206, 0.65)';
  handleClick() {
    this.onClick.emit();
  }
}
