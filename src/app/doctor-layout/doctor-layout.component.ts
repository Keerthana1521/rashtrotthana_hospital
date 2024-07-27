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
        name:'Dr. Shekar Patil',
        image: 'assets/doctor-9.png',
        desgination: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
        about: 'Dr. Shekar Patil is a Medical Oncologist Bangalore. He has been practising medicine for 39 years including over 25 years in medical oncology. He treats conventional and high ...',
        speciality: 'General Medicine',
        areasOfExpertise: ['All adult cancers with special interest in precision oncolgy','immuno-oncology' ]
      },
      {
        name:'Dr. RAVISHANKAR. D',
        image: 'assets/doctor-6.png',
        desgination: 'Orthopedic surgeon',
        about: 'Dr. RAVISHANKAR. D is a Orthopedic surgeon and has an experience of 38 years in this field. He completed MBBS from Bangalore University, India in 1985 and DNB - Orthopedics ...',
        speciality: 'General Medicine',
        areasOfExpertise: ['Joint Replacement Surgery', 'Hip Replacement', 'Fracture Treatment', 'Joint Dislocation Treatment' ]
      },
      {
        name:'Dr. Pramod Cinder',
        image: 'assets/doctor-26.png',
        desgination: 'ORTHOPAEDIC ONCOSURGEON',
        about: '',
        speciality: 'General Medicine',
        areasOfExpertise: ['Limb salvage surgeries with Biological reconstruction',
'CATS ( Computer Assisted Tumour Surgery )', 
'Use of Fresh Frozen Allograft',
'Microsurgical reconstruction',
'Complex Pelvic tumours and reconstructions for Chondrosarcomas, Osteosarcomas and Ewings sarcoma',
'Use of molecular and targeted agents in the management of massive tumours (Denosumab in Giant cell tumours)',
'Virtual Reality in Physiotherapy',
'Robotic pelvic surgeries -Davinci',
'3D Printing - Navigation in Oncology',
'Stem cell and regenerative therapy' ]
      },
      {
        name:'Dr. Nagaraj Rao',
        image: 'assets/doctor-31.png',
        desgination: 'UROLOGY',
        about: '',
        speciality: 'General Medicine',
        areasOfExpertise: ['EndoUrology', 'Uro Oncology', 'Stone Disease' ]
      },
      {
        name:'Dr. H M Krishnamurthy',
        image: 'assets/doctor-49.png',
        desgination: 'Consultant - Internal Medicine',
        about: 'Dr. H.M.Krishnamurthy is a Doctor in Bangalore and has an experience of 40 years in this field. Dr. H.M.Krishnamurthy practices at Various hospitals in Bangalore and He completed ...',
        speciality: 'General Medicine',
        areasOfExpertise: ['Metabolic Disorders', 'Infectious Diseases', 'Geriatrics', 'Non Interventional- Respiratory Diseses', 'Diabetes- Thyroid', 'All Adult Chronic Diseases' ]
      },
      {
        name:'Dr. Shashi Vadhanan',
        image: 'assets/doctor-5.png',
        desgination: 'GENERAL SURGERY',
        speciality: 'General Medicine',
        areasOfExpertise: ['Minimally Invasive Spine Surgery', 'Spinal Deformity Correction', 'Spinal Cord Tumors', 'Cerebrovascular Surgery', 'Neurosurgery', 'Neuroendoscopy', 'Deep Brain Stimulation', 'Epilepsy Surgery', 'Paediatric Neurosurgery' ]
      },
      {
        name:'Dr. Savinay S Kanchibail',
        image: 'assets/doctor-11.png',
        desgination: 'NIOR CONSULTANT PAEDIATRICS & NEONATOLOGY',
        about: 'I am a senior consultant paediatrician & Neonatologist at Rashtrotthana Hospital. I have more than 20 years of experience in Paediatrician – having worked in various...',
        speciality: 'General Medicine',
        areasOfExpertise: ['ALLERGY', 'NUTRITION & NEWBORN CARE' ]
      },
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

