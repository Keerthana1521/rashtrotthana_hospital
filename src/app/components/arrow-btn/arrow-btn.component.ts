import { Component, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-arrow-btn',
  templateUrl: './arrow-btn.component.html',
  styleUrl: './arrow-btn.component.css'
})
export class ArrowBtnComponent {
  @Output() onClick = new EventEmitter<void>();
  @Input() text: string = 'Read More';
  handleClick() {
    this.onClick.emit();
  }
}
