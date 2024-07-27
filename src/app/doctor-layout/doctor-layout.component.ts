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
  visibleDoctors: any[] = [];
  private currentIndex: number = 0;
  private readonly batchSize: number = 8;
  increment = 8;
  startIndex = 0;

  private itemsPerPage = 8; // Number of items to show per scroll
  private currentPage = 0;

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
        name:'Dr.(Col)Anand Shankar',
        image: 'assets/doctor-7.png',
        desgination: 'ER HEAD,ICU,ANAESTHESIA',
        about: 'Col. Dr. Anand Shankar is an anesthesiologist and intensivist and has an overall experience of 29 years. He served the Indian armed forces for a duration of 27 years....',
        speciality: 'General Medicine',
        areasOfExpertise: ['Intensive Care', 'Emergency Care', 'Anesthesiology']
      },

{
        name:'Dr. H N Shyla',
        image: 'assets/doctor-8.png',
        desgination: 'DENTAL SCIENCE',
        about: '',
        speciality: 'General Medicine',
        areasOfExpertise: ['Intensive Care','' ]
      },

{
        name:'Dr. Latha Venkataram',
        image: 'assets/doctor-2.png',
        desgination: 'OBSTETRICS & GYNECOLOGY',
        about: 'Maternity Unit at JMRH & RC is run by WMN team of OBGYNs headed by Dr. Latha Venkatraman.Dr. Latha Venkatraman is a renowned OBGYN with more than 30 years of experience...',
        speciality: 'General Medicine',
        areasOfExpertise: ['Vaginal Delivery',
'High Risk Pregnancy',
'Diabetes & Pregnancy',
'Medical Disorders in Pregnancy',
'Recurrent Pregnancy loss treatment',
'Emergency Obstetric care',
'Vaginal Surgeries, Management of menopause related issues',]
      },
      {
        name:'Dr. Atmaram D C',
        image: 'assets/doctor-3.png',
        desgination: 'SURGERY/LAPROSCOPY/GASTR OENTEROLOGY',
        about: 'Presently working as Assistant Professor Neurosurgery at Dayanand Sagar Medical College, Kanakpura Road.',
        speciality: 'General Medicine',
        areasOfExpertise: ['GI surgery', 'Laproscopy', 'Onco Surgery', 'Lasers' ]
      },

{
        name:'Dr. Rajeev Vijayakumar',
        image: 'assets/doctor-4.png',
        desgination: 'Oncologist',
        about: 'Dr Rajeev, the very senior consultant whose expertise in Medical Oncology, Hemato Oncology, and Bone Marrow Transplant ensures that your confidence in his ...',
        speciality: 'General Medicine',
        areasOfExpertise: ['Medical Oncology', 'Hemato- Oncology', 'Bone Marrow Transplant' ]
      },

{
        name:'Dr. Shashi Vadhanan',
        image: 'assets/doctor-5.png',
        desgination: 'GENERAL SURGERY',
        about: 'Neurosurgeon in practice since 10.5 years. Working in the hospital & state of care health care industry. Skilled in Neurospinal surgical procedures, Clinical Research&, Medical ...',
        speciality: 'General Medicine',
        areasOfExpertise: ['Minimally Invasive Spine Surgery', 'Spinal Deformity Correction', 'Spinal Cord Tumors', 'Cerebrovascular Surgery', 'Neurosurgery', 'Neuroendoscopy', 'Deep Brain Stimulation', 'Epilepsy Surgery', 'Paediatric Neurosurgery' ]}
    ]
    constructor(private fb: FormBuilder, public dialog: MatDialog) {}

    ngOnInit() {
      this.contactForm = this.fb.group({
        subject: ['', Validators.required]
        
      });
      this.loadVisibleDoctors();
  
      // Initialize the filteredDoctors list with all doctors
      this.filteredDoctors = this.doctors;
    }
    onScroll(event: any) {
      const element = event.target;
      if (element.scrollHeight - element.scrollTop === element.clientHeight) {
        this.loadMoreDoctors();
      }
      // if (this.currentIndex < this.doctors.length) {
      //   this.loadMoreDoctors();
      // }
      // this.startIndex += this.increment;
      // this.loadVisibleDoctors();
    }
    loadVisibleDoctors() {
      // const nextBatch = this.doctors.slice(this.currentIndex, this.currentIndex + this.batchSize);
      // this.visibleDoctors = [...this.visibleDoctors, ...nextBatch];
      // this.currentIndex += this.batchSize;.
      this.visibleDoctors = this.doctors.slice(this.startIndex, this.startIndex + this.increment);
    }
    loadMoreDoctors() {
      const nextPage = this.currentPage + 1;
      const startIndex = nextPage * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const newDoctors = this.doctors.slice(startIndex, endIndex);
  
      this.visibleDoctors = [...this.visibleDoctors, ...newDoctors];
      this.currentPage = nextPage;
    }
  
    // onScroll() {
      // if (this.currentIndex < this.doctors.length) {
      //   this.loadMoreDoctors();
      // }
      // this.startIndex += this.increment;
      // this.loadVisibleDoctors();
    // }
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
  
  // selectDoctor(doctor: any): void {
    // this.selectedDoctor = doctor;
    // this.selectedDoctor = doctor;
    // const doctorIndex = this.doctors.indexOf(doctor);
    // if (doctorIndex !== -1) {
    //   this.startIndex = doctorIndex;
    //   this.loadVisibleDoctors();
    // }
  // }
  selectDoctor(doctor:any) {
    this.selectedDoctor = doctor;
    const doctorIndex = this.doctors.indexOf(doctor);
    if (doctorIndex !== -1) {
      this.startIndex = doctorIndex;
      this.loadVisibleDoctors();
    }
    
    // Scroll to the doctor-details div
    setTimeout(() => {
      const element = document.getElementById('doctor-details');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
  closeDoctorDetails(): void {
    this.selectedDoctor = null;
  }

}

