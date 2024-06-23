import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-btn',
  templateUrl: './arrow-btn.component.html',
  styleUrl: './arrow-btn.component.css'
})
export class ArrowBtnComponent {
  @Input() text: string = 'Read More';
}
