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
  this.disabledDays = [0,1,3,5]; // Disable all days except Friday (5)
}
else if (this.selectedDoctor.date === 'Monday,Wednesday and Friday') {
  this.disabledDays = [0,2,4,6]; // Disable all days except Friday (5)
}
else if (this.selectedDoctor.date === 'Monday,Wednesday,Friday and Saturday') {
  this.disabledDays = [0,2,4]; // Disable all days except Friday (5)
}
else if (this.selectedDoctor.date === 'Monday,Wednesday,Thursday and Friday') {
  this.disabledDays = [0,2,6]; // Disable all days except Friday (5)
}
else {
    this.disabledDays = [];
  }
}
onDateChange(event: any) {
  const selectedDate = new Date(event);
  const dayOfWeek = selectedDate.getDay();

  if (this.selectedDoctor.name === 'Dr. Ashika Bagaria' && dayOfWeek === 2) { // Check if Tuesday
    this.availableTimes = [
      { name: '10:00 - 10:20' },
      { name: '10:20 - 10:40' },
      { name: '10:40 - 11:00' },
      { name: '11:00 - 11:20' },
      { name: '11:20 - 11:40' },
      { name: '11:40 - 12:00' },
      { name: '12:00 - 12:20' },
      { name: '12:20 - 12:40' },
      { name: '12:40 - 13:00' },
      { name: '13:00 - 13:20' },
      { name: '13:20 - 13:40' },
      { name: '13:40 - 14:00' },
      { name: '14:00 - 14:20' },
      { name: '14:20 - 14:40' },
      { name: '14:40 - 15:00' },
      { name: '15:00 - 15:20' },
      { name: '15:20 - 15:40' },
      { name: '15:40 - 16:00' }
    ];
  } else {
    // Use default available times or set based on the selected doctor
    this.availableTimes = this.selectedDoctor.time.split(',').map((time: string) => ({ name: time }));
  }
  if (this.selectedDoctor.name === 'Dr. Manasa N. A' && dayOfWeek === 6) { // Check if Tuesday
    this.availableTimes = [
      { name: '13:30-13:50' },
      { name: '13:50-14:10' },
      { name: '14:10-14:30' },
      { name: '14:30-14:50' },
      { name: '14:50-15:10' },
      { name: '15:10-15:30' }
    ];
  } else {
    // Use default available times or set based on the selected doctor
    this.availableTimes = this.selectedDoctor.time.split(',').map((time: string) => ({ name: time }));
  }
}

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
    emailjs.send('service_pzzreii', 'template_5iklj2q', emailParams, 'poMF_gJiwXDRedqcn')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Thank you, we have received your request and will get back to you shortly to confirm the details. ' });
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
