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

  selectedCity: any;

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
      desgination: 'ER HEAD,ICU,ANAESTHESIA',
      about: 'Col. Dr. Anand Shankar is an anesthesiologist and intensivist and has an overall experience of 29 years. He served the Indian armed forces for a duration of 27 years....',
      speciality: 'ANAESTHESIOLOGY',
      areasOfExpertise: ['Intensive Care', 'Emergency Care', 'Anesthesiology']
    },

    {
      name: 'Dr. H N Shyla',
      image: 'assets/doctor-8.png',
      desgination: 'DENTAL SCIENCES',
      about: 'BDS, MDS - Oral & Maxillofacial Surgery Dentist, Oral And Maxillo-Facial Surgeon, Implantologist, Cosmetic/Aesthetic Dentist 22+ Years Experience Overall  (21 years as specialist)',
      speciality: 'DENTAL SCIENCES',
      areasOfExpertise: ["Dentist", 'Oral And MaxilloFacial Surgeon', 'Implantologist', 'Cosmetic/Aesthetic Dentist']
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
        'Vaginal Surgeries, Management of menopause related issues',]
    },
    {
      name: 'Dr. Shekar Patil',
      image: 'assets/doctor-9.png',
      desgination: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
      about: 'Dr. Shekar Patil is a Medical Oncologist Bangalore. He has been practising medicine for 39 years including over 25 years in medical oncology. He treats conventional and high ...',
      speciality: 'ONCOLOGY',
      areasOfExpertise: ['All adult cancers with special interest in precision oncolgy', 'immuno-oncology']
    },
    {
      name: 'Dr. RAVISHANKAR. D',
      image: 'assets/doctor-6.png',
      desgination: 'Orthopedic surgeon',
      about: 'Dr. RAVISHANKAR. D is a Orthopedic surgeon and has an experience of 38 years in this field. He completed MBBS from Bangalore University, India in 1985 and DNB - Orthopedics ...',
      speciality: 'ORTHOPEDICS',
      areasOfExpertise: ['Joint Replacement Surgery', 'Hip Replacement', 'Fracture Treatment', 'Joint Dislocation Treatment']
    },
    {
      name: 'Dr. Pramod Cinder',
      image: 'assets/doctor-26.png',
      desgination: 'ORTHOPAEDIC ONCOSURGEON',
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
        'Stem cell and regenerative therapy']
    },
    {
      name: 'Dr. Nagaraj Rao',
      image: 'assets/doctor-31.png',
      desgination: 'UROLOGY',
      about: '',
      speciality: 'UROLOGY',
      areasOfExpertise: ['EndoUrology', 'Uro Oncology', 'Stone Disease']
    },
    {
      name: 'Dr. H M Krishnamurthy',
      image: 'assets/doctor-49.png',
      desgination: 'Consultant - Internal Medicine',
      about: 'Dr. H.M.Krishnamurthy is a Doctor in Bangalore and has an experience of 40 years in this field. Dr. H.M.Krishnamurthy practices at Various hospitals in Bangalore and He completed ...',
      speciality: 'GENERAL MEDICINE',
      areasOfExpertise: ['Metabolic Disorders', 'Infectious Diseases', 'Geriatrics', 'Non Interventional- Respiratory Diseses', 'Diabetes- Thyroid', 'All Adult Chronic Diseases']
    },
    {
      name: 'Dr. Shashi Vadhanan',
      image: 'assets/doctor-5.png',
      desgination: 'GENERAL SURGERY',
      speciality: 'GENERAL SURGERY',
      areasOfExpertise: ['Minimally Invasive Spine Surgery', 'Spinal Deformity Correction', 'Spinal Cord Tumors', 'Cerebrovascular Surgery', 'Neurosurgery', 'Neuroendoscopy', 'Deep Brain Stimulation', 'Epilepsy Surgery', 'Paediatric Neurosurgery']
    },
    {
      name: 'Dr. Savinay S Kanchibail',
      image: 'assets/doctor-11.png',
      desgination: 'PAEDIAIATRICS & NEONATOLOGY',
      about: 'I am a senior consultant paediatrician & Neonatologist at Rashtrotthana Hospital. I have more than 20 years of experience in Paediatrician – having worked in various...',
      speciality: 'PAEDIATRICS AND NEONATOLOGY',
      areasOfExpertise: ['ALLERGY', 'NUTRITION & NEWBORN CARE']
    },
    {
      name: 'Dr. SHREELAKSHMI G',
      image: 'assets/doctor-10.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr. Shreelakshmi G is graduated from university from mysore. She also did post graduation in M.S .OBSTETRICS AND GYNAECOLOGY (2003)',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['High Risk Obstetrics', 'Vaginal Delivery', 'Adolescent Gynaecology', 'Women health education and empowerment', 'Management of Diabetes in pregnancy']
    },

    {
      name: 'Dr. Geethanjali K G',
      image: 'assets/doctor-19.png',
      desgination: 'DENTAL SCIENCES',
      about: 'Worked as full time comsultant at Sagar Hospitals, Banashankari - Bangalore.Worked as full time consultant at S.S. Hospital, SSNMC Hospital & SS Sparsh Hospital, Bangalore.',
      speciality: 'DENTAL SCIENCES',
      areasOfExpertise: ['General Dentistry', 'Endodontics']
    },

    {
      name: 'Dr. Santhosh S',
      image: 'assets/doctor-16.png',
      desgination: 'CONSULTANT NEPHROLOGIST & TRANSPLANT PHYSICIAN',
      about: 'Dr.Santhosh S is graduated from AJIMS ,MANAGALORE in 2008.He finished his post graduation (MD Internal medicine) from KIMS HUBLI.',
      speciality: 'NEPHROLOGY',
      areasOfExpertise: ['General Dentistry', 'Endodontics']
    },

    {
      name: 'Dr. Sowmya Bhat S',
      image: 'assets/doctor-45.png',
      desgination: 'OPTHALMOLOGY',
      about: 'Dr. Sowmya S Bhat has completed her basic Medical Education from St. John’s Medical College, Bangalore.She has received post graduate training in ophthalmology from the prestigious..',
      speciality: 'OPTHALMOLOGY',
      areasOfExpertise: ['General Dentistry', 'Endodontics']
    },

    {
      name: 'DR. SUHAS RAJ S',
      image: 'assets/doctor-37.png',
      desgination: 'CARDIOLOGY',
      about: 'Dr.Suhas Raj is graduate from Govt. Stanely Medical College and Hospital,Chennai in 2015. He did his post graduation (MD GENERAL MEDICINE) from KANYAKUMARI GOVT.',
      speciality: 'CARDIAC SCIENCES',
      areasOfExpertise: ['Interventional cardiology', 'Heart failure', 'Preventive Cardiology']
    },

    {
      name: 'Dr. Atmaram D C',
      image: 'assets/doctor-3.png',
      desgination: 'SURGERY/ LAPROSCOPY/ GASTROENTEROLOGY',
      about: 'Presently working as Assistant Professor Neurosurgery at Dayanand Sagar Medical College, Kanakpura Road.',
      speciality: 'GENERAL SURGERY',
      areasOfExpertise: ['GI surgery', 'Laproscopy', 'Onco Surgery', 'Lasers']
    },


    {
      name: 'Dr. Kolla Vinod',
      image: 'assets/doctor-32.png',
      desgination: 'INTERVENTIONAL PULMONARY MEDICINE',
      about: 'Pulmonologist with special skills in bronchoscopy , thoracoscopy,sleep studies ,did specialization from narayana medical college, with expertise in critical care.',
      speciality: 'PULMONOLOGY',
      areasOfExpertise: ['BRONCHOSCOPY', 'THORACOSCOPY', 'SLEEP MEDICINE', 'COPD, ASTHAMA', 'PNEUMONIA', 'BRONCHIECTASIS', 'ALLERGIC BRONCHITIS', 'MALIGNANCYAND ALL TYPES OF LUNG DISORDERS']
    },

    {
      name: 'Dr.Meena H B',
      image: 'assets/doctor-24.png',
      desgination: 'DERMATOLOGY',
      about: 'Presently working as Assistant Professor Neurosurgery at Dayanand Sagar Medical College, Kanakpura Road.',
      speciality: 'DERMATOLOGY',
      areasOfExpertise: ['Clinical dermatology and various procedures like skin tag removal', 'DPN removal, wart removal, corn and callosity',
        'chemical peels for acne', 'pigmentation and skin rejuvenation', 'laser for hair removal', 'acne scar and pigmentation', 'PRP for hair and face', 'Derma-roller', 'Nanopore for skin brightening', 'pigmentation and acne scar microdermabrasion']
    },

    {
      name: 'Dr. Sindhu P Madanshetty',
      image: 'assets/doctor-20.png',
      desgination: 'INTERNAL MEDICINE',
      about: ' Dr Sindhu P Madanshetty is a graduate Karnataka Institute of Medical Science,Hubli having graduated in 2014.She finished her post graduation in 2018 from Bangalore Medical College and Research Institute.',
      speciality: 'GENERAL MEDICINE',
      areasOfExpertise: ['Diabetes, Diabetes Reversal', 'Thyroid related illness', 'Blood related disorders', 'critical illness', 'Hypertension', 'Infectious disease']
    },


    {
      name: 'Dr. Sujayendra D M',
      image: 'assets/doctor-21.png',
      desgination: 'ORTHOPAEDICS',
      about: ' Dr.Sujayendra D.M did his MBBS and MS Orthopaedics from the prestigious Kasturba Medical College, Manipal. Being one of the few colleges with different units for Orthopaedic sub-specialities...',
      speciality: 'ORTHOPAEDICS',
      areasOfExpertise: ['Fracture care', 'Joint replacement surgeries and Arthroscopy (keyhole) surgeries']
    },


    {
      name: 'Dr. Manasa N A',
      image: 'assets/doctor-44.png',
      desgination: 'ENT, HEAD & NECK SURGERY',
      about: 'Dr.Manasa N A is graduate from M.S.RAMAIAH MEDICAL COLLEGE AND HOSPITAL in 2011.She completed DIPLOMA IN ORTHINOLARYNGOLOGY in 2016.Also she did secondary DNB in 2021.',
      speciality: 'ENT SPECIALITY',
      areasOfExpertise: ['Micro ear surgery for hearing restoration', 'Septoplasty', 'Endoscopic sinus surgery', 'management of vocal cord and voice disorders', 'Diagnosis and treatment of Head and neck tumors', 'tracheotomy and airway surgeries', 'polytrauma management', 'snoring evaluation and management of obstructive sleep apnea', 'Tonsillectomy', 'Adenoidectomy', 'myringotomy']
    },


    {
      name: 'Dr.Madhu S N',
      image: 'assets/doctor-17.png',
      desgination: 'UROLOGIST & ANDROLOGIST',
      speciality: 'UROLOGY',
      about: 'Worked as Assistant prof. in the department of urology at St. John’s Medical Collage hospital, a premier high volume territory care hospital in Bangalore.',
      areasOfExpertise: ['Urology', 'EndoUrology,Kidney Transplantation', 'Reconstructive urology', 'Laproscopic urology Uro Oncology', 'Stone Disease']
    },


    {
      name: 'Dr. Jaidev S',
      image: 'assets/doctor-38.png',
      desgination: 'Neuro Science',
      speciality: 'NEURO SCIENCES',
      about: 'Neurosurgeon with special skills in the management of emergency and elective cases with MCh degree from AIIMS, Bhubaneshwar and MS General surgery degree from King George Medical University, Lucknow.',
      areasOfExpertise: ['Spine surgery', 'Brain surgery', 'Treatment of Neck pain', 'Back pain', 'Stroke', 'Neuropathy']
    },

    {
      name: 'Dr. Nishanth Lakshmikanth',
      image: 'assets/doctor-25.png',
      desgination: 'GENERAL & GI SURGERY',
      speciality: 'GENERAL SURGERY',
      about: 'Neurosurgeon with special skills in the management of emergency and elective cases with MCh degree from AIIMS, Bhubaneshwar and MS General surgery degree from King George Medical University, Lucknow.',
      areasOfExpertise: [' ']
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
        'Cosmetic surgery', 'Burns and trauma reconstruction']
    },
    {
      name: 'Dr. Valli Kiran',
      image: 'assets/doctor-27.png',
      desgination: 'PSYCHIATRY',
      speciality: 'PSYCHIATRY',
      about: 'Dr.Valli Kiran M is graduate from MYSORE UNIVERSITY in 2001.He did DIPLOMA IN PSYCHIATRY in 20005',
      areasOfExpertise: ['Entire Spectrum of Psychological Disorders']
    },
    {
      name: 'Dr.Vishnuvardhan V',
      image: 'assets/doctor-36.png',
      desgination: 'ORTHO DENTIST',
      speciality: 'DENTAL SCIENCES',
      about: '',
      areasOfExpertise: ['']
    },
    {
      name: 'Dr. Prakruthi',
      image: 'assets/doctor-12.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr.Prakruthi is graduated from JJMMC,DAVANGERE in 2004.She completed post graduation in DGO(2018).He did training in Laproscopy from ALTIUS HOSPITAL BLORE in 2022.He also completed DNB from BANGALORE BAPTIST HOSPITAL.',
      areasOfExpertise: ['Labour ward management', 'Development of protocols', 'High risk pregnancy management', 'Fetal Scans']
    },
    {
      name: 'Dr. Ravi T',
      image: 'assets/doctor-23.png',
      desgination: 'SR. CONSULTANT MEDICAL ONCOLOGIST',
      speciality: 'ONCOLOGY',
      about: '',
      areasOfExpertise: ['All adult cancers with special interest in precision oncolgy ,immuno-oncology']
    },

    {
      name: 'Dr. Suvarnini Konale',
      image: 'assets/doctor-14.png',
      desgination: 'LIFESTYLE MEDICINE/ YOGA & NATUROPATHY',
      about: 'Her 15 years of experience includes teaching BNYS students and treating thousands of clients through yoga and Naturopathy.',
      speciality: 'LIFESTYLE MEDICINE',
      areasOfExpertise: []
    },
    {
      name: 'Dr. Vishwanth Sanagoudar',
      image: 'assets/doctor-29.png',
      desgination: 'PAEDIATRIC & PICU',
      about: 'Has experience of about 8 years. Experienced in treating general paediatric patients & paediatric ICU patients. Sub specialised in Paediatric ICU care.',
      speciality: 'PAEDIATRICS & NEONATOLOGY',
      areasOfExpertise: ['GENERAL PAEDIATRICS', 'NEWBORN CARE', 'PAEDIATRIC EMERGENCIES & PAEDIATRIC CRITICAL CARE']
    },
    {
      name: 'Dr.Niveditha C',
      image: 'assets/doctor-30.png',
      desgination: 'PAEDIATRICS & NEONATOLOGY',
      about: 'Consultation Paediatrician and Neonatologist with expertise in management of Paediatric and Neonates including extreme preterm, birth asphyxia, advanced ventilation and critical interventional procedures.',
      speciality: 'PAEDIATRICS & NEONATOLOGY',
      areasOfExpertise: ['General paediatrics', 'Critical Newborn and Paediatric care', 'Paediatric Nutrition']
    },
    {
      name: 'Dr. Nikhil Hegde',
      image: 'assets/doctor-22.png',
      desgination: 'ORTHOPAEDICS',
      about: 'Specialised training in sports medicine, Arthroplasty and trauma',
      speciality: 'ORTHOPAEDICS',
      areasOfExpertise: ['Sports Medicine', 'Artgroplasty', 'Arthroscopy & Trauma']
    },
    {
      name: 'Dr. Neelam',
      image: 'assets/doctor-13.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr.Neelam is graduate from KASTURBA MEDICAL COLLEGE in 2009.She did DIPLOMATE OF NATIONAL BOARD (obstetrics & gynaecology) in 2013.She also completed her post graduation in MRCOG on 2016.',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      areasOfExpertise: ['High Risk Pregnancy', 'Adolescent care', 'Integrated medicine Protocols', 'Role of yoga in Women s Health care']
    },
    {
      name: 'Dr. Ashwitha Gundmi',
      image: 'assets/doctor-15.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr.Ashwitha Gundmi is graduated on 2012.She also did her post graduation on 2017.',
      areasOfExpertise: ['High Risk Obstetrics', 'Protocol based management', 'Gynaecological Surgeries', '- MIS', 'Fertility Related issues', 'Family planning & Contraception']
    },
    {
      name: 'Dr. Vinutha Udupa',
      image: 'assets/doctor-33.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      speciality: 'OBSTETRICS & GYNECOLOGY',
      about: 'Dr.Vinitha Udupa is graduate RAJIV GANDHI UNIVERSITY in 2012.Her post graduation is finished from Jawaharlal Insitute of Postgraduated Medical Education and Reasearch in 2016.',
      areasOfExpertise: ['High Risk Pregnancy', ' Medical Disorders of pregnancy', 'Preconception Counselling', 'Prenatal Aneuploidy Screening']
    },
    {
      name: 'Dr. Anusha Mutalik Desai',
      image: 'assets/doctor-39.png',
      desgination: 'Homeopathy',
      speciality: 'HOMEOPATHY',
      about: 'Worked as consultant Neurosurgeon in Brains Super specialty hospital Bengaluru (Jan 2023- June 2023)',
      areasOfExpertise: ['See all patients in Homoeopathy we will not concentrate on 1 aspect']
    },
    {
      name: 'DR. AJAY N',
      image: 'assets/doctor-28.png',
      desgination: 'GASTRO SCIENCES',
      speciality: 'GASTRO SCIENCES',
      about: 'Dr.Ajay N is graduate from B.R.AMBEDKAR MEDICAL COLLEGE in 2018.He also completed post graduation (MS in general surgery) from Adichunchanagiri institute of Medical Sciences, Mandya in 2023.',
      areasOfExpertise: ['Fresher']
    },
    {
      name: 'Dr. Varsha P',
      image: 'assets/doctor-43.png',
      desgination: 'LIFE STYLE MEDICINE',
      speciality: 'LIFE STYLE MEDICINE',
      about: '',
      areasOfExpertise: ['']
    },

    {
      name: 'Dr. Rohith K R',
      image: 'assets/doctor-41.png',
      desgination: 'AYURVEDA',
      speciality: 'AYURVEDA',
      about: 'Dr.Rohit K R is graduate from P N Panicker Souhruda Ayurveda Medical College,Kerala.He has one year experience at HOUSE SURGEON.',
      areasOfExpertise: ['']
    },
    {
      name: 'Dr. Alekhya R',
      image: 'assets/doctor-40.png',
      desgination: 'AYURVEDA',
      speciality: 'AYURVEDA',
      about: 'Dr.Alekhya R is graduate from INDIAN INSITUTE OF AYURVEDIC MEDICINE AND RESEARCH in 2021',
      areasOfExpertise: ['']
    },
    {
      name: 'Dr. Narendranath A',
      image: 'assets/doctor-35.png',
      desgination: 'ENT',
      speciality: 'ENT SPECIALITY',
      about: 'Dr.Narendranath A is graduate from RAJAH MUTHIAH MEDICAL COLLEGE,TAMIL NADU in 2010.HEe completed his post graduation MS (ENT) from vijayanagar insititute of medical sciences,bellary in 2015.',
      areasOfExpertise: ['']
    },
    {
      name: 'Dr. Ashika Bagaria',
      image: 'assets/doctor-34.png',
      desgination: 'ENT',
      speciality: 'ENT SPECIALITY',
      about: 'Dr.Ashika Bagaria is graduate from Rajiv Gandhi University',
      areasOfExpertise: ['']
    },
    {
      name: 'Dr. Harshitha. R',
      image: 'assets/doctor-46.png',
      desgination: 'Consultant Internal Medicine',
      about: ' ',
      speciality: 'GENERAL MEDICINE',
      areasOfExpertise: [' ']
    },
    {
      name: 'Dr. Bhavya',
      image: 'assets/doctor-47.png',
      desgination: 'Consultant Internal Medicine',
      about: ' ',
      speciality: 'GENERAL MEDICINE',
      areasOfExpertise: [' ']
    },

    {
      name: 'Dr. Shamanta',
      image: 'assets/doctor-50.png',
      desgination: 'LIFE STYLE MEDICINE',
      about: ' ',
      speciality: 'LIFE STYLE MEDICINE',
      areasOfExpertise: [' ']
    },
    {
      name: 'Dr. Kavyashree Kulamarva',
      image: 'assets/doctor-48.png',
      desgination: 'Ayurvedic Psychiatry Consultant',
      about: ' ',
      speciality: 'AYURVEDA',
      areasOfExpertise: [' ']
    },

  ]
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
        name: 'GENERAL MEDICINE',
        code: 'AU',
        items: [
          {
            cname: 'GENERAL MEDICINE', code: 'GM-ON'
          },
          {
            cname: 'GENERAL SURGERY', code: 'GM-ON'
          },
          {
            cname: 'OBSTETRICS AND GYNECOLOGY', code: 'GM-ON'
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
            cname: 'OPHTHALMOLOGY', code: 'GM-ON'
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
            cname: 'ANESTHESIOLOGY', code: 'GM-ON'
          },
          {
            cname: 'EMERGENCY MEDICINE', code: 'GM-ON'
          },


        ]
      },
      { cname: 'LIFE STYLE MEDICINE', code: 'YG' },
      { cname: 'AYURVEDA', code: 'AY' },
      { cname: 'HOMEOPATHY', code: 'HO' },
      { cname: 'NATUROPATHY', code: 'NA' }

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
  if (this.startIndex >= 41) {
    // If startIndex is 41 or more, load exactly 8 more doctors
    const remainingDoctors = this.doctors.slice(this.startIndex, 49);
    this.visibleDoctors = [this.visibleDoctors, ...remainingDoctors];
    // this.startIndex += remainingDoctors.length;
  } else {
    // Regular batch loading
    this.visibleDoctors = this.doctors.slice(this.startIndex, this.startIndex + this.increment);
    // this.visibleDoctors = [...this.visibleDoctors, ...batchDoctors];
    // this.startIndex += this.increment;
  }
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
  closeDoctorDetails(): void {
    this.selectedDoctor = null;
  }

}

