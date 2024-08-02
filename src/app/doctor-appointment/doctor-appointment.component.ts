import { Component,OnInit,Input,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { MessageService } from 'primeng/api';

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
  constructor(private fb: FormBuilder, private messageService: MessageService){}
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
        time: ['', Validators.required],
        message: ['', Validators.required],
        date_appointment: ['', Validators.required],
      });
      if (this.selectedDoctor && this.selectedDoctor.time) {
        this.availableTimes = this.selectedDoctor.time.split(',').map((time: string) => ({ name: time }));
      }
      this.setDateConstraints();
      // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted Successfully ' });
}
setDateConstraints() {
  if (this.selectedDoctor.date === 'Monday-Saturday') {
    this.disabledDays = [0]; // Disable Sunday (0) and Saturday (6)
  } else if (this.selectedDoctor.date === 'Friday') {
    this.disabledDays = [0, 1, 2, 3, 4, 6]; // Disable all days except Friday (5)
  
} else if (this.selectedDoctor.date === 'Tuesday') {
  this.disabledDays = [0, 1, 5, 3, 4, 6]; // Disable all days except Friday (5)
} 
else if (this.selectedDoctor.date === 'Wednesday') {
  this.disabledDays = [0, 1, 2, 4, 5,6]; // Disable all days except Friday (5)
} 
else if (this.selectedDoctor.date === 'Tuesday and Friday') {
  this.disabledDays = [0,1,3,4,6]; // Disable all days except Friday (5)
}
else if (this.selectedDoctor.date === 'Tuesday and Thursday') {
  this.disabledDays = [0,1,3,5,6]; // Disable all days except Friday (5)
}
else if (this.selectedDoctor.date === 'Monday and Wednesday') {
  this.disabledDays = [0,2,4,5,6]; // Disable all days except Friday (5)
}
else if (this.selectedDoctor.date === 'Tuesday,Thursday and Saturday') {
  this.disabledDays = [0,1,3,4]; // Disable all days except Friday (5)
} else {
    this.disabledDays = [];
  }
}
// setDateConstraints() {
//   const availableDaysMap = {
//     'Sunday': 0,
//     'Monday': 1,
//     'Tuesday': 2,
//     'Wednesday': 3,
//     'Thursday': 4,
//     'Friday': 5,
//     'Saturday': 6
//   };

//   const availableDays = this.selectedDoctor.date.split(',').map((day:string) => day.trim());
//   const disabledDays = [];

//   for (const [day, index] of Object.entries(availableDaysMap)) {
//     if (!availableDays.includes(day)) {
//       disabledDays.push(index);
//     }
//   }

//   this.disabledDays = disabledDays;
// }

formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
onSubmit(): void {
  if (this.contactForm.valid) {
    const dateObj = this.contactForm.value.date_appointment;
    const appointmentDate = dateObj ? this.formatDate(new Date(dateObj)) : '';
    const emailParams = {
      doctorName: this.selectedDoctor.name,
      doctorDesignation: this.selectedDoctor.desgination,
      patientName: this.contactForm.value.name,
      patientEmail: this.contactForm.value.email,
      patientContact: this.contactForm.value.contactNumber,
      appointmentTime: this.contactForm.value.time.name,
      appointmentDate: appointmentDate,
      message: this.contactForm.value.message
    };
console.log(emailParams);
    // Send the email using EmailJS
    emailjs.send('sservice_ft48q3q', 'template_y0gvfsq', emailParams, '5siXgoaMR-a7DGzR9')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted Successfully ' });
        this.contactForm.reset();
        this.close.emit();
      }, (error) => {
        console.log('FAILED...', error);
        // alert('Failed to send appointment request. Please try again later.');
        this.messageService.add({ severity: 'danger', summary: 'Error', detail: 'Error ' });
      });
  }
  }

get f(): { [key: string]: AbstractControl } {
  return this.contactForm.controls;
} 
closeDialog(): void {
  this.close.emit();
}
}
