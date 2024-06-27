import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ContactFormService } from '../contact-form.service';

interface City {
  name: string;
}
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})

export class ContactFormComponent implements OnInit {
  contactForm:any = FormGroup;
  subjects = [
    { name: 'General Inquiry' },
    { name: 'Support' },
    { name: 'Feedback' },
  ];
  cities: City[] | undefined;

  selectedCity: City | undefined;
  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private contactFormService: ContactFormService) {}
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
      });
}
onSubmit(): void {
  if (this.contactForm.valid) {
    this.contactFormService.submitForm(this.contactForm.value).subscribe(
      response => {
        console.log('Server response:', response);
    console.log('Form Submitted', this.contactForm.value);
      },
      error => {
        console.error('Error submitting form:', error);
        // Handle error if necessary
      }
      
    );
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted Successfully ' });
    this.contactForm.reset();
    
  }
}
get f(): { [key: string]: AbstractControl } {
  return this.contactForm.controls;
}
}
