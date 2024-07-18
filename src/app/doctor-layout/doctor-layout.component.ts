import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';
import { MessageService } from 'primeng/api';
import { ContactFormService } from '../contact-form.service';


@Component({
  selector: 'app-doctor-layout',
  templateUrl: './doctor-layout.component.html',
  styleUrl: './doctor-layout.component.css'
})
export class DoctorLayoutComponent {
  selectedSpeciality: string = '';
  nameFilter: string = '';
  filteredDoctors: any[] = [];
  selectedDoctor: any = null;

  value: string="";
contactForm:any = FormGroup;
    subjects = [
      { name: 'General Medicine' },
      { name: 'Yoga' },
      { name: 'Ayurveda' },
      { name: 'Homeopathy' },
      { name: 'Naturopathy' },
    ];
    doctors =[
   
      {
        name:'Dr. Latha Venkataram',
        image: 'assets/doctor-2.png',
        desgination: 'OBSTETRICS & GYNECOLOGY',
        about: 'Maternity Unit at JMRH & RC is run by WMN team of OBGYNs headed by Dr. Latha Venkatraman. Dr. Latha Venkatraman is a renowned OBGYN with more than 30 years ...',
        speciality: 'General Medicine',
        areasOfExpertise: ['GI surgery', 'Laproscopy','Onco Surgery','Lasers']
      },
      {
        name:'Dr. Atmaram D C',
        image:'assets/doctor-3.png',
        desgination:'GASTROENTEROLOGY',
        about:'Presently working as Assistant Professor Neurosurgery at Dayanand Sagar Medical College, Kanakpura Road.',
        speciality: 'Yoga'
      },
      {name:'Dr. Rajeev Vijayakumar',
      image:'assets/doctor-4.png',
      desgination:'Medical Oncology',
      about:'Dr Rajeev, the very senior consultant whose expertise in Medical Oncology, Hemato Oncology, and Bone Marrow Transplant ensures that your confidence in his ...',
      speciality:'Ayurveda'
    },
      {
        name:'Dr. Shashi Vadhanan',
        image:'assets/doctor-5.png',
        desgination:'GENERAL SURGERY',
        about:'Neurosurgeon in practice since 10.5 years. Working in the hospital & state of care health care industry. Skilled in Neurospinal surgical procedures, Clinical Research&, Medical ...',
        speciality:'Homeopathy'
      },
      {name:'Dr. RAVISHANKAR. D',
      image:'assets/doctor-6.png',
      desgination:'Orthopedic surgeon',
      about:'Dr. RAVISHANKAR. D is a Orthopedic surgeon and has an experience of 38 years in this field. He completed MBBS from Bangalore University, India in 1985 and DNB - Orthopedics ...',
      speciality:'Naturopathy'
    },
    
  
    ]
    constructor(private fb: FormBuilder, public dialog: MatDialog) {}

    ngOnInit() {
      this.contactForm = this.fb.group({
        subject: ['', Validators.required],
        
      });
  
      // Initialize the filteredDoctors list with all doctors
      this.filteredDoctors = this.doctors;
    }
  
    onSubmit(): void {
      this.selectedSpeciality = this.contactForm.value.subject.name;
      this.filterDoctors();
    }
  clear(): void {
    this.contactForm.reset();
    this.nameFilter = '';
    this.selectedSpeciality = '';
    this.filteredDoctors = this.doctors;
  }
  private normalizeName(name: string): string {
    return name.toLowerCase().replace(/^dr\.\s*/, '');
  }
  filterDoctors(): void {
    const filteredBySpeciality = this.selectedSpeciality
      ? this.doctors.filter(doctor => doctor.speciality === this.selectedSpeciality)
      : this.doctors;

    const normalizedValue = this.nameFilter.toLowerCase();
    this.filteredDoctors = filteredBySpeciality.filter(doctor =>
      this.normalizeName(doctor.name).startsWith(normalizedValue)
    );
  }
  
  selectDoctor(doctor: any): void {
    this.selectedDoctor = doctor;
  }
  closeDoctorDetails(): void {
    this.selectedDoctor = null;
  }

}

