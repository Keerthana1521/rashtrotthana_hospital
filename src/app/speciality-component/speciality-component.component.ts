import { Component,Input } from '@angular/core';
import { Doctors } from '../doctor.model';
@Component({
  selector: 'app-speciality-component',
  templateUrl: './speciality-component.component.html',
  styleUrl: './speciality-component.component.css'
})
export class SpecialityComponentComponent {
@Input()main_heading:string='';
@Input()heading:string='';
@Input()content:string='';
@Input()content_1:string='';
@Input()doctor?:Doctors[];
@Input()image:string='';
@Input() activeSpecialty: string = '';
// @Input() experience: string = '';

  isActive(specialty: string): boolean {
    return this.activeSpecialty === specialty;
  }

}
