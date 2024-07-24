import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-more-btn',
  templateUrl: './read-more-btn.component.html',
  styleUrl: './read-more-btn.component.css'
})
export class ReadMoreBtnComponent {
  @Output() onClick = new EventEmitter<void>();
  @Input() text: string = 'Read More';
  handleClick() {
    this.onClick.emit();
  }
}
