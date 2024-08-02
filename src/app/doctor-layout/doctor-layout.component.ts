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
  countries: any[] | undefined;
  selectedDoctorAppoint: any = null;
  selectedCity: any;
  showAppointmentForm: boolean = false;
  selectedSpeciality: string = '';
  // selectedSubject: any;
  // selectedGeneralMedicineOption: any;
  // generalMedicineOptions: any[];
  subjects: any[] | undefined;
  selectedSubject: any;
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

  value: string = "";
  contactForm: any = FormGroup;
  // subjects = [
  //   { name: 'General Medicine' },
  //   { name: 'Yoga' },
  //   { name: 'AYURVEDA' },
  //   { name: 'Homeopathy' },
  //   { name: 'Naturopathy' },
  // ];
  doctors = [
    {
      name: 'Dr.(Col)Anand Shankar',
      image: 'assets/doctor-7.png',
      desgination: 'ER HEAD, ICU, ANAESTHESIA',
      about: 'Col. Dr. Anand Shankar is an anesthesiologist and intensivist and has an overall experience of 29 years. He served the Indian armed forces for a duration of 27 years....',
      speciality: 'ANAESTHESIOLOGY',
      areasOfExpertise: ['Intensive Care', 'Emergency Care', 'Anesthesiology'],
      expertise: 'Years of Experience: 29',
      qualification:'MBBS,MD (ANAESTHESIOLOGY), EDIC',
      date:'Monday-Saturday',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00'
    },

    {
      name: 'Dr. H N Shyla',
      image: 'assets/doctor-8.png',
      desgination: 'DENTAL SCIENCES',
      about: 'BDS, MDS - Oral & Maxillofacial Surgery Dentist, Oral And Maxillo-Facial Surgeon, Implantologist, Cosmetic/Aesthetic Dentist 22+ Years Experience Overall  (21 years as specialist)',
      speciality: 'DENTAL SCIENCES',
      areasOfExpertise: ["Dentist", 'Oral And MaxilloFacial Surgeon', 'Implantologist', 'Cosmetic/Aesthetic Dentist'],
      expertise: 'Years of Experience: 20',
      qualification:'BDS,MDS',
      time:'9:00-9:20,9:20-9:40,9:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },

    {
      name: 'Dr. Latha Venkataram',
      image: 'assets/doctor-2.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      about: 'Maternity Unit at JMRH & RC is run by WMN team of OBGYNs headed by Dr. Latha Venkatraman.Dr. Latha Venkatraman is a renowned OBGYN with more than 30 years of experience...',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['Vaginal Delivery',
        'High Risk Pregnancy',
        'Diabetes & Pregnancy',
        'Medical Disorders in Pregnancy',
        'Recurrent Pregnancy loss treatment',
        'Emergency Obstetric care',
        'Vaginal Surgeries, Management of menopause related issues',],
        expertise: 'Years of Experience: 32',
        qualification:'MBBS, MRCOG(UK), MRCP(I), FRCOG(UK)',
        time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
        date:'Tuesday'
    },
    {
      name: 'Dr. Shekar Patil',
      image: 'assets/doctor-9.png',
      desgination: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
      about: 'Dr. Shekar Patil is a Medical Oncologist Bangalore. He has been practising medicine for 39 years including over 25 years in medical oncology. He treats conventional and high dose chemotherapy for both solid and haematological malignancies. Dr. Patil s knowledge and expertise spans a vast area including: Intraperitoneal Chemotherapy as consolidation in advanced Ovarian Cancers Concurrent radiation and chemotherapy (BIP) in Carcinoma Cervix Bone Marrow Transplantation Oral recombinant human lactoferrin with Carboplatin Chemotherapy in Gynaecological Malignancies Treatment of Lymphomas Treatment of Acute Myeloid Leukaemia.',
      speciality: 'ONCOLOGY',
      areasOfExpertise: ['All adult cancers with special interest in precision oncolgy', 'immuno-oncology'],
      expertise: 'Years of Experience: 35',
      qualification:'MBBS, MD, DM',
      time:'9:00-9:15,9:15-9:30,9:30-9:45,9:45:10:00',
      date:'Friday'
  
      
    },
    // {
    //   name: 'Dr. Ravishankar. D',
    //   image: 'assets/doctor-6.png',
    //   desgination: 'Orthopedic surgeon',
    //   about: 'Dr. Ravishankar D, our esteemed orthopedic surgeon at Rashtrotthana Hospital. With 38 years of experience overall and 31 years as a specialist, Dr. Ravishankar is highly skilled in his field. He completed his MBBS from Bangalore University, India, in 1985 and his DNB in Orthopedics/Orthopedic Surgery from the DNB Board, New Delhi, in 1989.As a member of the Karnataka Medical Council, Dr. Ravishankar offers a range of services including Joint Replacement Surgery, Hip Replacement, Fracture Treatment, and Joint Dislocation Treatment.Trust Dr. Ravishankar D at Rashtrotthana Hospital for top-notch orthopedic care. With decades of experience and a dedication to patient well-being, you are in the best hands for all your orthopedic needs.',
    //   speciality: 'ORTHOPEDICS',
    //   areasOfExpertise: ['Joint Replacement Surgery', 'Hip Replacement', 'Fracture Treatment', 'Joint Dislocation Treatment'],
    //   expertise: 'Years of Experience: 38',
    //   time:''
    // },
    {
      name: 'Dr. Pramod Cinder',
      image: 'assets/doctor-26.png',
      desgination: 'ORTHOPEDIC ONCOSURGEON',
      about: '',
      speciality: 'ORTHOPEDICS',
      areasOfExpertise: ['Limb salvage surgeries with Biological reconstruction',
        'CATS ( Computer Assisted Tumour Surgery )',
        'Use of Fresh Frozen Allograft',
        'Microsurgical reconstruction',
        'Complex Pelvic tumours and reconstructions for Chondrosarcomas, Osteosarcomas and Ewings sarcoma',
        'Use of molecular and targeted agents in the management of massive tumours (Denosumab in Giant cell tumours)',
        'Virtual Reality in Physiotherapy',
        'Robotic pelvic surgeries -Davinci',
        '3D Printing - Navigation in Oncology',
        'Stem cell and regenerative therapy'],
      expertise: 'Years of Experience: 20',
      qualification:'MBBS, MS(ORTHO), FHRM, FMSO',
      time:'9:00-9:20,9:20-9:40,9:40-10:00,10:20-10:40,10:40-11:00',
      date:'Friday'
    },
    {
      name: 'Dr. Nagaraj Rao',
      image: 'assets/doctor-31.png',
      desgination: 'UROLOGY',
      about: '',
      speciality: 'UROLOGY',
      areasOfExpertise: ['EndoUrology', 'Uro Oncology', 'Stone Disease'],
      expertise: 'Years of Experience:25 ',
      qualification:'MBBS, MS, MCH',
      time:'12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
      date:'Tuesday and Thursday'
    },
    {
      name: 'Dr. H M Krishnamurthy',
      image: 'assets/doctor-49.png',
      desgination: 'Consultant - Internal Medicine',
      about: 'Dr. H.M.Krishnamurthy is a Doctor in Bangalore and has an experience of 40 years in this field. Dr. H.M.Krishnamurthy practices at Various hospitals in Bangalore and He completed MBBS from Bangalore University in 1984',
      speciality: 'GENERAL MEDICINE',
      areasOfExpertise: ['Metabolic Disorders', 'Infectious Diseases', 'Geriatrics', 'Non Interventional- Respiratory Diseses', 'Diabetes- Thyroid', 'All Adult Chronic Diseases'],
        expertise: 'Years of Experience: 36',
        qualification:'MBBS, MD',
        time:'18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
        date:'Monday-Saturday'
    },
    {
      name: 'Dr. Shashi Vadhanan',
      image: 'assets/doctor-5.png',
      desgination: 'GENERAL SURGERY',
      speciality: 'GENERAL SURGERY',
      about:'Dr. Shashivadhanan specializes in a wide array of neurosurgical and spinal procedures. His areas of expertise include Minimally Invasive Spine Surgery, Spinal Deformity Correction, Spinal Cord Tumors, Cerebrovascular Surgery, Neuroendoscopy, Deep Brain Stimulation, Epilepsy Surgery and Paediatric Neurosurgery. He is also skilled in minimally invasive pain interventions for spinal pain, including Facetal and Transforaminal Blocks, Vertebroplasty and Kyphoplasty.',
      areasOfExpertise: ['Minimally Invasive Spine Surgery', 'Spinal Deformity Correction', 'Spinal Cord Tumors', 'Cerebrovascular Surgery', 'Neurosurgery', 'Neuroendoscopy', 'Deep Brain Stimulation', 'Epilepsy Surgery', 'Paediatric Neurosurgery'],
      expertise: 'Years of Experience: 30+',
      qualification:'MBBS, MS, DNB(GEN SURGERY), MCH, DNB(NEUROSURGERY), FRCS EDINBURGH, FICS, FIGASS(COPENHAGEN), FIMSA, MNAMS',
      time:'12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Savinay S Kanchibail',
      image: 'assets/doctor-11.png',
      desgination: 'PAEDIAIATRICS & NEONATOLOGY',
      about: 'I am a senior consultant paediatrician & Neonatologist at Rashtrotthana Hospital. I have more than 20 years of experience in Paediatrician – having worked in various...',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      areasOfExpertise: ['ALLERGY', 'NUTRITION & NEWBORN CARE'],
      expertise: 'Years of Experience: 20',
      qualification:'MBBS, DCH, DNB, MRCPCH(UK), NEONATAL FELLOWSHIP(IAP)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Shreelakshmi G',
      image: 'assets/doctor-10.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr. Shreelakshmi G is graduated from university from mysore. She also did post graduation in M.S .OBSTETRICS AND GYNAECOLOGY (2003)',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['High Risk Obstetrics', 'Vaginal Delivery', 'Adolescent Gynaecology', 'Women health education and empowerment', 'Management of Diabetes in pregnancy'],
      expertise: 'Years of Experience: 20',
      qualification:'MMBBS, MS, MRCOG(UK)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00',
      date:'Wednesday'
    },
    {
      name:'Dr. Rajeev Vijayakumar',
      image: 'assets/doctor-4.png',
      desgination: 'Oncologist',
      about: 'Dr Rajeev, the very senior consultant whose expertise in Medical Oncology, Hemato Oncology, and Bone Marrow Transplant ensures that your confidence in his ...',
      speciality: 'ONCOLOGY',
      areasOfExpertise: ['Medical Oncology', 'Hemato- Oncology', 'Bone Marrow Transplant' ],
      expertise: 'Years of Experience: 20',
      qualification:'MBBS, DNB (Gen Medicine) DNB (Medical Oncology) MRCP (UK)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday and Wednesday'
    },
    {
      name:'Dr. Shashidhar',
      image: 'assets/doctor-51.png',
      desgination: 'Anaesthesia',
      about: ' Dr. Shashidhar, our esteemed anesthesiologist with over 20 years of dedicated experience in the field. With qualifications including MBBS and DA, Dr. Shashidhar specializes in intensive care, emergency care and anesthesiology. His expertise ensures the safe and effective management of anesthesia for various medical procedures, providing essential support in critical and emergency situations. Trust him for expert care in anesthesia at every stage of your medical journey.',
      speciality: 'ANAESTHESIOLOGY',
      expertise: 'Years of Experience: 20+',
      time:'No-slot',
      date:'Monday-Saturday',
      qualification:'MBBS, DA',
      areasOfExpertise: ['Intensive Care', 'Emergency Care', 'Anesthesiology' ]
    },

{
      name:'Dr. Mahesh Kulkarni',
      image: 'assets/doctor-52.png',
      desgination: 'Orthopaedics',
      about: ' Dr. Mahesh Kulkarni, who has over 15 years of extensive orthopedic care experience. Specializing in joint preservation, limb preservation, deformity correction, pelviacetabular fractures, sports injuries and spine affections, Dr. Mahesh is dedicated to providing comprehensive orthopedic treatments tailored to each patient\'s needs. Whether you\'re recovering from an injury or seeking specialized care, trust him for expert orthopedic consultations and treatments.',
      speciality: 'ORTHOPEDICS',
      expertise: 'Years of Experience: 15+',
      time:'18:30-18:50,18:50-19:10,19:10-19:30',
      date:'Monday-Saturday',
      qualification:'MBBS, DNB Ortho',
      areasOfExpertise: ['Joint preservation', 'Limb preservation', 'Deformity correction', 'Pelviacetabular fractures', 'Sports injuries', 'Spine affections' ]
    },

    {
      name: 'Dr. Geethanjali K G',
      image: 'assets/doctor-19.png',
      desgination: 'DENTAL SCIENCES',
      about: 'Worked as full time comsultant at Sagar Hospitals, Banashankari - Bangalore.Worked as full time consultant at S.S. Hospital, SSNMC Hospital & SS Sparsh Hospital, Bangalore.',
      speciality: 'DENTAL SCIENCES',
      areasOfExpertise: ['General Dentistry', 'Endodontics'],
      expertise: 'Years of Experience: 16',
      qualification:'BDS,PGCE,PGCOI',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },

    {
      name: 'Dr. Santhosh S',
      image: 'assets/doctor-16.png',
      desgination: 'CONSULTANT NEPHROLOGIST & TRANSPLANT PHYSICIAN',
      about: 'Dr.Santhosh S is graduated from AJIMS ,MANAGALORE in 2008.He finished his post graduation (MD Internal medicine) from KIMS HUBLI.',
      speciality: 'NEPHROLOGY',
      areasOfExpertise: ['General Dentistry', 'Endodontics'],
      expertise: 'Years of Experience: 14',
      qualification:'MBBS, MD, DM(NEPHROLOGY)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00,20:00-20:20,20:20-20:40,20:40-21:00,21:00-21:20,21:20-21:40,21:40-22:00,22:00-22:20,22:20-22:40,22:40-23:00,23:00-23:15,23:15-23:30',
      date:'Monday-Saturday'
    },

    {
      name: 'Dr. Sowmya Bhat S',
      image: 'assets/doctor-45.png',
      desgination: 'OPTHALMOLOGY',
      about: 'Dr. Sowmya S Bhat has completed her basic Medical Education from St. John’s Medical College, Bangalore.She has received post graduate training in ophthalmology from the prestigious..',
      speciality: 'OPTHALMOLOGY',
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 10',
      qualification:'MBBS, DO, DNB, FPR, FICO',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00',
      date:'Tuesday and Friday'
    },

    {
      name: 'DR. Suhas Raj S',
      image: 'assets/doctor-37.png',
      desgination: 'CARDIOLOGY',
      about: 'Dr.Suhas Raj is graduate from Govt. Stanely Medical College and Hospital,Chennai in 2015. He did his post graduation (MD GENERAL MEDICINE) from KANYAKUMARI GOVT.',
      speciality: 'CARDIAC SCIENCES',
      areasOfExpertise: ['Interventional cardiology', 'Heart failure', 'Preventive Cardiology'],
      expertise: 'Years of Experience: 8',
      qualification:'MBBS, MD(GEN MEDICINE), DM(CARDIOLOGY)',
      time:'18:00-18:20,18:20-18:40,18:40-19:00',
      date:'Monday-Saturday'
    },

    {
      name: 'Dr. Atmaram D C',
      image: 'assets/doctor-3.png',
      desgination: 'SURGERY/ LAPROSCOPY/ GASTROENTEROLOGY',
      about: 'Presently working as Assistant Professor Neurosurgery at Dayanand Sagar Medical College, Kanakpura Road.',
      speciality: 'GENERAL SURGERY',
      areasOfExpertise: ['GI surgery', 'Laproscopy', 'Onco Surgery', 'Lasers'],
      expertise: 'Years of Experience: 18',
      qualification:'MBBS, MS',
      time:'16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },


    {
      name: 'Dr. Kolla Vinod',
      image: 'assets/doctor-32.png',
      desgination: 'INTERVENTIONAL PULMONARY MEDICINE',
      about: 'Pulmonologist with special skills in bronchoscopy , thoracoscopy,sleep studies ,did specialization from narayana medical college, with expertise in critical care.',
      speciality: 'PULMONOLOGY',
      areasOfExpertise: ['BRONCHOSCOPY', 'THORACOSCOPY', 'SLEEP MEDICINE', 'COPD, ASTHAMA', 'PNEUMONIA', 'BRONCHIECTASIS', 'ALLERGIC BRONCHITIS', 'MALIGNANCYAND ALL TYPES OF LUNG DISORDERS'],
      expertise: 'Years of Experience: 15',
      qualification:'MBBS, MD PULMONOLOGY MEDICINE',
      time:'16:30-16:50,16:50-17:10,17:10-17:30,17:30-17:50,17:50-18:10,18:10-18:30',
      date:'Monday-Saturday'
    },

    {
      name: 'Dr.Meena H B',
      image: 'assets/doctor-24.png',
      desgination: 'DERMATOLOGY',
      about: 'Presently working as Assistant Professor Neurosurgery at Dayanand Sagar Medical College, Kanakpura Road.',
      speciality: 'DERMATOLOGY',
      areasOfExpertise: ['Clinical dermatology and various procedures like skin tag removal', 'DPN removal, wart removal, corn and callosity',
        'chemical peels for acne', 'pigmentation and skin rejuvenation', 'laser for hair removal', 'acne scar and pigmentation', 'PRP for hair and face', 'Derma-roller', 'Nanopore for skin brightening', 'pigmentation and acne scar microdermabrasion'],
        expertise: 'Years of Experience: 9',
        time:'18:00:18:15,18:15-18:30,18:30-18:45,18:45-19:00',
        qualification:'MBBS,MD(DERMATOLOGY)',
        date:'Tuesday,Thursday and Saturday'
    },

    {
      name: 'Dr. Sindhu P Madanshetty',
      image: 'assets/doctor-20.png',
      desgination: 'INTERNAL MEDICINE',
      about: ' Dr Sindhu P Madanshetty is a graduate Karnataka Institute of Medical Science,Hubli having graduated in 2014.She finished her post graduation in 2018 from Bangalore Medical College and Research Institute.',
      speciality: 'GENERAL MEDICINE',
      areasOfExpertise: ['Diabetes, Diabetes Reversal', 'Thyroid related illness', 'Blood related disorders', 'critical illness', 'Hypertension', 'Infectious disease'],
      expertise: 'Years of Experience: 9',
      qualification:'MBBS,MD INTERNAL MEDICINE,IDCCM',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },


    {
      name: 'Dr. Sujayendra D M',
      image: 'assets/doctor-21.png',
      desgination: 'ORTHOPEDICS',
      about: ' Dr.Sujayendra D.M did his MBBS and MS Orthopaedics from the prestigious Kasturba Medical College, Manipal. Being one of the few colleges with different units for Orthopaedic sub-specialities...',
      speciality: 'ORTHOPEDICS',
      areasOfExpertise: ['Fracture care', 'Joint replacement surgeries and Arthroscopy (keyhole) surgeries'],
      expertise: 'Years of Experience: 11',
      qualification:'MBBS ,MS (ORTHO),DNB (Ortho),Diploma SICOT,Fellowship in Arthroplasty',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:20-14:40,14:40-15:00,15:00-15:20',
      date:'Monday-Saturday'
    },


    {
      name: 'Dr. Manasa N A',
      image: 'assets/doctor-44.png',
      desgination: 'ENT, HEAD & NECK SURGERY',
      about: 'Dr.Manasa N A is graduate from M.S.RAMAIAH MEDICAL COLLEGE AND HOSPITAL in 2011.She completed DIPLOMA IN ORTHINOLARYNGOLOGY in 2016.Also she did secondary DNB in 2021.',
      speciality: 'ENT SPECIALITY',
      areasOfExpertise: ['Micro ear surgery for hearing restoration', 'Septoplasty', 'Endoscopic sinus surgery', 'management of vocal cord and voice disorders', 'Diagnosis and treatment of Head and neck tumors', 'tracheotomy and airway surgeries', 'polytrauma management', 'snoring evaluation and management of obstructive sleep apnea', 'Tonsillectomy', 'Adenoidectomy', 'myringotomy'],
      expertise: 'Years of Experience: 7',
      qualification:'MBBS, DLO, DNB(ENT)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },


    {
      name: 'Dr.Madhu S N',
      image: 'assets/doctor-17.png',
      desgination: 'UROLOGIST & ANDROLOGIST',
      speciality: 'UROLOGY',
      about: 'Worked as Assistant prof. in the department of urology at St. John’s Medical Collage hospital, a premier high volume territory care hospital in Bangalore.',
      areasOfExpertise: ['Urology', 'EndoUrology,Kidney Transplantation', 'Reconstructive urology', 'Laproscopic urology Uro Oncology', 'Stone Disease'],
      expertise: 'Years of Experience: 14',
      qualification:'MBBS, MS(GEN. SURGERY), MCH(UROLOGY)',
      time:'9:30-9:50,9:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10,11:10-11:30,11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10,13:10-13:30,13:30-13:50,13:50-14:10,14:10-14:30,14:30-14:50,14:50-15:10,15:10-15:30,15:30-15:50,15:50-16:10',
      date:'Monday-Saturday'
    },


    {
      name: 'Dr. Jaidev S',
      image: 'assets/doctor-38.png',
      desgination: 'Neuro Science',
      speciality: 'NEUROSCIENCES',
      about: 'Neurosurgeon with special skills in the management of emergency and elective cases with MCh degree from AIIMS, Bhubaneshwar and MS General surgery degree from King George Medical University, Lucknow.',
      areasOfExpertise: ['Spine surgery', 'Brain surgery', 'Treatment of Neck pain', 'Back pain', 'Stroke', 'Neuropathy'],
      expertise: 'Years of Experience: 4',
      time:'17:00-17:15,17:15-17:30,17:30-17:45,17:45-18:00',
      qualification:'MBBS, MS , MCH(NEURO SURGERY)',
      date:'Monday-Saturday'
    },

    {
      name: 'Dr. Nishanth Lakshmikanth',
      image: 'assets/doctor-25.png',
      desgination: 'GENERAL & GI SURGERY',
      speciality: 'GENERAL SURGERY',
      about: 'Neurosurgeon with special skills in the management of emergency and elective cases with MCh degree from AIIMS, Bhubaneshwar and MS General surgery degree from King George Medical University, Lucknow.',
      areasOfExpertise: [' '],
      expertise: 'Years of Experience: 5',
      qualification:'MBBS, MS, FMAS, FIAGES',
      time:'9:30-9:50,9:50-10:10,10:10-10:30,10:30-10:50,10:50-11:10',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr.Sameer M Halageri',
      image: 'assets/doctor-26.png',
      desgination: 'PLASTIC SURGERY',
      speciality: 'PLASTIC SURGERY',
      about: 'Dr, Sameer M Halageri is graduate from JAYA JAGADURU MURUGARAJENDRA MEDICAL COLLEGE in 2009.He completed his post graduation from GOVT. MEDICAL COLLEGE,NAGPUR IN 2015.',
      areasOfExpertise: ['Microvascular surgery and cancer reconstruction',
        'Hand and brachial plexus surgery',
        'Breast and lymphedema surgery',
        'Cleft and craniofacial surgery',
        'Diabetic foot and complex wound management',
        'Cosmetic surgery', 'Burns and trauma reconstruction'],
        expertise: 'Years of Experience: 7',
        qualification:'MBBS ,MS,MCH',
        time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
        date:'Monday-Saturday'
    },
    {
      name: 'Dr. Valli Kiran',
      image: 'assets/doctor-27.png',
      desgination: 'PSYCHIATRY',
      speciality: 'PSYCHIATRY',
      about: 'Dr.Valli Kiran M is graduate from MYSORE UNIVERSITY in 2001.He did DIPLOMA IN PSYCHIATRY in 20005',
      areasOfExpertise: ['Entire Spectrum of Psychological Disorders'],
      expertise: 'Years of Experience: 20',
      qualification:'MBBS, DPM',
      time:'16:30-16:50,16:50-17:10,17:10-17:30,17:30-17:50,17:50-18:10',
      date:'Tuesday,Thursday,Saturday'
    },
    {
      name: 'Dr.Vishnuvardhan V',
      image: 'assets/doctor-36.png',
      desgination: 'ORTHO DENTIST',
      speciality: 'DENTAL SCIENCES',
      about: '',
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 6',
      qualification:'BDS,MDS (ORTHODONTICS AND DENTOFACIAL ORTHOPAEDICS)',
      time:'15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Prakruthi',
      image: 'assets/doctor-12.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr.Prakruthi is graduated from JJMMC,DAVANGERE in 2004.She completed post graduation in DGO(2018).He did training in Laproscopy from ALTIUS HOSPITAL BLORE in 2022.He also completed DNB from BANGALORE BAPTIST HOSPITAL.',
      areasOfExpertise: ['Labour ward management', 'Development of protocols', 'High risk pregnancy management', 'Fetal Scans'],
      expertise: 'Years of Experience: 16',
      qualification:'MBBS, DGO, DNB, FELLOWSHIP IN MATERNAL FETAL MEDICINE',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Ravi T',
      image: 'assets/doctor-23.png',
      desgination: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
      speciality: 'ONCOLOGY',
      about: 'Dr. Ravi Thippeswamy Senior Medical Oncologist With 20 years of invaluable experience, Dr. Ravi Thippeswamy is a distinguished Medical Oncologist in Bangalore. He is committed to delivering comprehensive care to his patients and maintains affiliations with several hospitals throughout the city. He completed his MBBS from Jagadguru Jayadeva Murugarajendra Medical College (JJMMC) in 2004, his DNB in Medical Oncology from the National Board of Examination in 2012 and his MD in Pediatrics from the University of Mumbai in 2008.As a member of the Karnataka Medical Council, Dr. Thippeswamy specializes in various aspects of Medical Oncology, including Hemato Oncology and Pediatric Oncology. With 11 years of specialization, he brings a wealth of knowledge and expertise to his practice, ensuring the best possible outcomes for his patients.',
      areasOfExpertise: ['All adult cancers with special interest in precision oncolgy ,immuno-oncology'],
      expertise: 'Years of Experience: 14',
      qualification:'MBBS, MD, DM',
      time:'9:00-9:20,9:20-9:40,9:40-10:00,10:20-10:40,10:40-11:00',
      date:'Friday'
    },

    {
      name: 'Dr. Suvarnini Konale',
      image: 'assets/doctor-14.png',
      desgination: 'LIFESTYLE MEDICINE/ YOGA & NATUROPATHY',
      about: 'Her 15 years of experience includes teaching BNYS students and treating thousands of clients through yoga and Naturopathy.',
      speciality: 'LIFE STYLE MEDICINE',
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 15',
      qualification:'BNYS',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Vishwanth Sanagoudar',
      image: 'assets/doctor-29.png',
      desgination: 'PAEDIATRIC & PICU',
      about: 'Has experience of about 8 years. Experienced in treating general paediatric patients & paediatric ICU patients. Sub specialised in Paediatric ICU care.',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      areasOfExpertise: ['GENERAL PAEDIATRICS', 'NEWBORN CARE', 'PAEDIATRIC EMERGENCIES & PAEDIATRIC CRITICAL CARE'],
      expertise: 'Years of Experience: 8',
      qualification:'MBBS,MD,FELLOWSHIP IN PAEDIATRIC INTENSIVE CARE (IGICH)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Niveditha C',
      image: 'assets/doctor-30.png',
      desgination: 'PAEDIATRICS & NEONATOLOGY',
      about: 'Consultation Paediatrician and Neonatologist with expertise in management of Paediatric and Neonates including extreme preterm, birth asphyxia, advanced ventilation and critical interventional procedures.',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      areasOfExpertise: ['General paediatrics', 'Critical Newborn and Paediatric care', 'Paediatric Nutrition'],
      expertise: 'Years of Experience: 7',
      qualification:'MBBS ,MD ,Fellowship in Neonatology (NNF)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00,17:00-17:20,17:20-17:40,17:40-18:00,18:00-18:20,18:20-18:40,18:40-19:00,19:00-19:20,19:20-19:40,19:40-20:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Nikhil Hegde',
      image: 'assets/doctor-22.png',
      desgination: 'ORTHOPEDICS',
      about: 'Specialised training in sports medicine, Arthroplasty and trauma',
      speciality: 'ORTHOPEDICS',
      areasOfExpertise: ['Sports Medicine', 'Artgroplasty', 'Arthroscopy & Trauma'],
      expertise: 'Years of Experience: 6',
      qualification:'MBBS, MS Orthopaedicss',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Neelam',
      image: 'assets/doctor-13.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr.Neelam is graduate from KASTURBA MEDICAL COLLEGE in 2009.She did DIPLOMATE OF NATIONAL BOARD (obstetrics & gynaecology) in 2013.She also completed her post graduation in MRCOG on 2016.',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['High Risk Pregnancy', 'Adolescent care', 'Integrated medicine Protocols', 'Role of yoga in Women s Health care'],
      expertise: 'Years of Experience: 9',
      qualification:'MBBS, DNB, MRCOG(U.K)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Ashwitha Gundmi',
      image: 'assets/doctor-15.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr.Ashwitha Gundmi is graduated on 2012.She also did her post graduation on 2017.',
      areasOfExpertise: ['High Risk Obstetrics', 'Protocol based management', 'Gynaecological Surgeries', '- MIS', 'Fertility Related issues', 'Family planning & Contraception'],
      expertise: 'Years of Experience: 7',
      qualification:'MBBS, MS, MRCOG(London)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Vinutha Udupa',
      image: 'assets/doctor-33.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr.Vinitha Udupa is graduate RAJIV GANDHI UNIVERSITY in 2012.Her post graduation is finished from Jawaharlal Insitute of Postgraduated Medical Education and Reasearch in 2016.',
      areasOfExpertise: ['High Risk Pregnancy', ' Medical Disorders of pregnancy', 'Preconception Counselling', 'Prenatal Aneuploidy Screening'],
      expertise: 'Years of Experience: 7',
      qualification:'MBBS, MS, DNB, FNB, MRCOG(UK)',
      time:'11:30-11:50,11:50-12:10,12:10-12:30,12:30-12:50,12:50-13:10',
      date:'Tuesday'
    },
    {
      name: 'Dr. Anusha Mutalik Desai',
      image: 'assets/doctor-39.png',
      desgination: 'Homeopathy',
      speciality: 'HOMEOPATHY',
      about: 'Worked as consultant Neurosurgeon in Brains Super specialty hospital Bengaluru (Jan 2023- June 2023)',
      areasOfExpertise: ['See all patients in Homoeopathy we will not concentrate on 1 aspect'],
      expertise: 'Years of Experience: 7',
      qualification:'BHMS, MD(HOM)',
      time:'9:00-9:20,9:20-9:40,9:40-10:00,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Ajay N',
      image: 'assets/doctor-28.png',
      desgination: 'GASTRO SCIENCES',
      speciality: 'GASTRO SCIENCES',
      about: 'Dr.Ajay N is graduate from B.R.AMBEDKAR MEDICAL COLLEGE in 2018.He also completed post graduation (MS in general surgery) from Adichunchanagiri institute of Medical Sciences, Mandya in 2023.',
      areasOfExpertise: [''],
      qualification:'MBBS, MS.General Surgery',
      expertise: 'Years of Experience: 2',
      time:'9:30-9:40,9:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Varsha P',
      image: 'assets/doctor-43.png',
      desgination: 'LIFE STYLE MEDICINE',
      speciality: 'LIFE STYLE MEDICINE',
      qualification:'BNYS',
      about: 'Dr. Varsha, a seasoned expert in holistic health and wellness. With qualifications including BAMS, MD, and YIC, she is not only dedicated to her practice but also passionate about sharing her knowledge, as evidenced by her three years of experience. Her specialization includes preventive care, lifestyle consultation, therapeutic yoga, and the management of lifestyle disorders such as Diabetes, hypertension, PCOD, Obesity. Her expertise extends to diet counseling based on Ayurveda principles, yoga for pregnant women making her a valuable resource in promoting healthy living. ',
      areasOfExpertise: ['Hypothyroidism' ,
      'DM',
      'HTN',
      'Gastritis' ,
      'Haemorrhoids',
      'Migraine',
'      Anxiety disorders' ,
'      Depression ',
      'Asthma',
      'PCOD',
     ' Rheumatoid arthritis'],
      expertise: 'Years of Experience: 3',
      time:'9:30-9:40,9:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },

    {
      name: 'Dr. Rohith K R',
      image: 'assets/doctor-41.png',
      desgination: 'AYURVEDA',
      speciality: 'AYURVEDA',
      about: 'Dr.Rohit K R is graduate from P N Panicker Souhruda Ayurveda Medical College,Kerala.He has one year experience at HOUSE SURGEON.',
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 3',
      qualification:'BAMS',
      time:'9:30-9:40,9:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Alekhya R',
      image: 'assets/doctor-40.png',
      desgination: 'AYURVEDA',
      speciality: 'AYURVEDA',
      qualification:'BAMS',
      about: 'Dr.Alekhya R is graduate from INDIAN INSITUTE OF AYURVEDIC MEDICINE AND RESEARCH in 2021',
      areasOfExpertise: ['Gastric related issues','Sinusitis, Allergic rhinitis','Vatavyadi'],
      expertise: 'Years of Experience: 2',
      time:'9:30-9:40,9:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Narendranath A',
      image: 'assets/doctor-35.png',
      desgination: 'ENT',
      speciality: 'ENT SPECIALITY',
      about: 'Dr.Narendranath A is graduate from RAJAH MUTHIAH MEDICAL COLLEGE,TAMIL NADU in 2010.HEe completed his post graduation MS (ENT) from vijayanagar insititute of medical sciences,bellary in 2015.',
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 5',
      qualification:'MBBS, MS(ENT)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Ashika Bagaria',
      image: 'assets/doctor-34.png',
      desgination: 'ENT',
      speciality: 'ENT SPECIALITY',
      about: 'Dr.Ashika Bagaria is graduate from Rajiv Gandhi University',
      areasOfExpertise: [''],
      expertise: 'Years of Experience: 2',
      qualification:'MBBS, MS(ENT)',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Harshitha. R',
      image: 'assets/doctor-46.png',
      desgination: 'Consultant Internal Medicine',
      about: ' ',
      speciality: 'GENERAL MEDICINE',
      areasOfExpertise: ['Diabetes, dyslipidemia and other metabolic diseases','Thyroid disorders',' Hypertension','  Infectious diseases','Adult vaccination','Diabetes and life style patient education'],
      expertise: 'Years of Experience: 3',
      qualification:'MBBS, MD',
      time:'9:00-9:20,9:20-9:40,9:40-10:00,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Bhavya',
      image: 'assets/doctor-47.png',
      desgination: 'Consultant Internal Medicine',
      about: ' ',
      speciality: 'GENERAL MEDICINE',
      areasOfExpertise: ['Diabetes','Diabetes Reversal','Thyroid related illness','Blood related disorders','Critical illness','Hypertension','Infectious disease'],
      expertise: 'Years of Experience: ',
      qualification:'MBBS, MD',
      time:'9:00-9:20,9:20-9:40,9:40-10:00,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },

    {
      name: 'Dr. Shamantha S',
      image: 'assets/doctor-50.png',
      desgination: 'LIFE STYLE MEDICINE',
      about: ' ',
      speciality: 'LIFE STYLE MEDICINE',
      areasOfExpertise: [' '],
      qualification:'BAMS',
      expertise: 'Years of Experience: 3',
      time:'10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00',
      date:'Monday-Saturday'
    },
    {
      name: 'Dr. Kavyashree Kulamarva',
      image: 'assets/doctor-48.png',
      desgination: 'Ayurvedic Psychiatry Consultant',
      about: ' ',
      speciality: 'AYURVEDA',
      qualification:'MD,PDF',
      areasOfExpertise: [' Anxiety disorder and Depression','Child psychiatric disorders (ASD, ADHD)','Add on Ayurveda for Schizophrenia','Motor Neuron Disease','Parkinson s disease','Muscular dystrophy','Stroke rehab','Multiple Sclerosis' ,'Dementia'],
      expertise: 'Years of Experience: ',
      time:'9:30-9:40,9:40-10:00,10:00-10:20,10:20-10:40,10:40-11:00,11:00-11:20,11:20-11:40,11:40-12:00,12:00-12:20,12:20-12:40,12:40-13:00,13:00-13:20,13:20-13:40,13:40-14:00,14:00-14:20,14:20-14:40,14:40-15:00,15:00-15:20,15:20-15:40,15:40-16:00,16:00-16:20,16:20-16:40,16:40-17:00',
      date:'Monday-Saturday'
    },

  ]
  specialDoctors = ['Dr. Pramod Cinder', 'Dr.Meena H B', 'Dr. Shashi Vadhanan', 'Dr. Ravishankar. D'];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    // this.subjects = [
    //   {
    //     name: 'General Medicine', code: 'GM',
    //     items: [
    //       {
    //         name: 'New South Wales',
    //         cities: [
    //             { cname: 'Sydney', code: 'A-SY' },
    //             { cname: 'Newcastle', code: 'A-NE' },
    //             { cname: 'Wollongong', code: 'A-WO' }
    //         ]
    //     },
    //     ]
    //   },
    //   { name: 'Yoga', code: 'YG' },
    //   { name: 'AYURVEDA', code: 'AY' },
    //   { name: 'Homeopathy', code: 'HO' },
    //   { name: 'Naturopathy', code: 'NA' }
    // ];
  }
  // onSubjectChange(event: any) {
  //   this.selectedSubject = event.value;
  // }

  ngOnInit() {
    this.subjects = [
      {
        name: 'MODERN MEDICINE',
        code: 'AU',
        items: [
          {
            cname: 'GENERAL MEDICINE', code: 'GM-ON'
          },
          {
            cname: 'GENERAL SURGERY', code: 'GM-ON'
          },
          {
            cname: 'OBSTETRICS & GYNECOLOGY', code: 'GM-ON'
          },
          {
            cname: 'PAEDIATRICS AND NEONATOLOGY', code: 'GM-ON'
          },
          {
            cname: 'NEPHROLOGY', code: 'GM-ON'
          },
          {
            cname: 'UROLOGY', code: 'GM-ON'
          },
          {
            cname: 'ORTHOPEDICS', code: 'GM-ON'
          },
          {
            cname: 'GASTRO SCIENCES', code: 'GM-ON'
          },
          {
            cname: 'CARDIAC SCIENCES', code: 'GM-ON'
          },
          {
            cname: 'PULMONOLOGY', code: 'GM-ON'
          },
          {
            cname: 'OPTHALMOLOGY', code: 'GM-ON'
          },
          {
            cname: 'DENTAL SCIENCES', code: 'GM-ON'
          },
          {
            cname: 'ENT SPECIALITY', code: 'GM-ON'
          },
          {
            cname: 'NEUROSCIENCES', code: 'GM-ON'
          },
          {
            cname: 'ENDOCRINOLOGY', code: 'GM-ON'
          },
          {
            cname: 'PSYCHIATRY', code: 'GM-ON'
          },
          {
            cname: 'ONCOLOGY', code: 'GM-ON'
          },
          {
            cname: 'ANAESTHESIOLOGY', code: 'GM-ON'
          },
          {
            cname: 'EMERGENCY MEDICINE', code: 'GM-ON'
          },


        ]
      },
      { cname: 'LIFE STYLE MEDICINE', code: 'YG' },
      { cname: 'AYURVEDA', code: 'AY' },
      { cname: 'HOMEOPATHY', code: 'HO' },

    ];

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
      // this.loadMoreDoctors();
    }
    // if (this.currentIndex < this.doctors.length) {
    //   this.loadMoreDoctors();
    // }
    // this.startIndex += this.increment;
    // this.loadVisibleDoctors();
  }
//   loadVisibleDoctors() {

//     this.visibleDoctors = this.doctors.slice(this.startIndex, this.startIndex + this.increment);
//     if(this.startIndex == 41){
//       this.visibleDoctors = this.doctors.slice(this.startIndex,41)
//     }

//  }
// loadVisibleDoctors() {
//   if (this.startIndex >= 41) {
//     If startIndex is 41 or more, load exactly 8 more doctors without reducing
//     const remainingDoctors = this.doctors.slice(this.startIndex, this.startIndex + 8);
//     this.visibleDoctors = [...this.visibleDoctors, ...remainingDoctors];
//     this.startIndex += remainingDoctors.length;
//   } else {
//     Regular batch loading
//     this.visibleDoctors = this.doctors.slice(this.startIndex, this.startIndex + this.increment);
//   }
// }
loadVisibleDoctors() {
  this.visibleDoctors = this.doctors.slice(this.startIndex, this.startIndex + this.increment);
}
isPramodChinder(): boolean {
  return this.selectedDoctor && this.specialDoctors.includes(this.selectedDoctor.name);
}



  
  // loadMoreDoctors() {
  //   const nextPage = this.currentPage + 1;
  //   const startIndex = nextPage * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   const newDoctors = this.doctors.slice(startIndex, endIndex);

  //   this.visibleDoctors = [...this.visibleDoctors, ...newDoctors];
  //   this.currentPage = nextPage;
  // }

  // onScroll() {
  // if (this.currentIndex < this.doctors.length) {
  //   this.loadMoreDoctors();
  // }
  // this.startIndex += this.increment;
  // this.loadVisibleDoctors();
  // }
  onSubjectChange(event: any) {
    //   console.log('Selected Subject:', event);
    //   this.selectedSubject = event;
  }
  onSubmit(event: any): void {
    this.selectedSpeciality = this.contactForm.value.subject.cname;
    console.log(this.selectedSpeciality)
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
  selectDoctor(doctor: any) {
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

  selectDoctorAppoint(doctor: any) {
    this.selectedDoctorAppoint = doctor;
    this.showAppointmentForm = true;
    setTimeout(() => {
      const element = document.getElementById('appointment');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
  closeDoctorDetails(): void {
    this.selectedDoctor = null;
  }
  closeAppointmentForm() {
    this.showAppointmentForm = false;
    this.selectedDoctorAppoint = null;
  }
  handleBookAppointmentClick() {
    this.selectDoctorAppoint(this.selectedDoctor);
    this.showAppointmentForm = true;
  }

}

