import { Component,OnInit,Input,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

// import { MAT_DIALOG_DATA } from '@angular/material/dialog';


interface City {
  name: string;
}

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls:[ './doctor-appointment.component.css']
})

export class DoctorAppointmentComponent implements OnInit {
  @Input() selectedDoctor: any;
  @Output() close = new EventEmitter<void>();
  availableTimes: { name: string }[] = [];
  disabledDays: number[] = [];
  contactForm:any = FormGroup;
  subjects = [
    { name: '10:00 - 11:00' },
    { name: '12:00 - 2:00' },
    { name: '15:00 - 17:00' },
  ];
  cities: City[] | undefined;
  date: Date[] | undefined;

  selectedCity: City | undefined;
  constructor(private fb: FormBuilder){}
  ngOnInit() {
      this.cities = [
          { name: 'General Medicine'},
          { name: 'Rome' },
          { name: 'London'},
          { name: 'Istanbul' },
          { name: 'Paris' }
      ];
      this.contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contactNumber: ['', Validators.required],
        subject: ['', Validators.required],
        message: ['', Validators.required],
        time: ['', Validators.required],
      });
      if (this.selectedDoctor && this.selectedDoctor.time) {
        this.availableTimes = [{ name: this.selectedDoctor.time }];
      }
      this.setDateConstraints();
}
setDateConstraints() {
  if (this.selectedDoctor.date === 'Monday-Friday') {
    this.disabledDays = [0, 6]; // Disable Sunday (0) and Saturday (6)
  } else if (this.selectedDoctor.date === 'Friday') {
    this.disabledDays = [0, 1, 2, 3, 4, 6]; // Disable all days except Friday (5)
  } else {
    this.disabledDays = [];
  }
}
onSubmit(): void {
  if (this.contactForm.valid) {
    
  }
}
get f(): { [key: string]: AbstractControl } {
  return this.contactForm.controls;
} 
closeDialog(): void {
  this.close.emit();
}
}
