import { Component } from '@angular/core';

@Component({
  selector: 'app-advisory-board-members',
  templateUrl: './advisory-board-members.component.html',
  styleUrl: './advisory-board-members.component.css'
})
export class AdvisoryBoardMembersComponent {
  photos = [
    { url: '../../assets/mem-1.png', alt: 'Photo 1' },
    { url: '../../assets/mem-5.png', alt: 'Photo 2' },
    { url: '../../assets/mem-8.png', alt: 'Photo 3' },
    { url: '../../assets/mem-2.png', alt: 'Photo 3' },
    { url: '../../assets/mem-6.png', alt: 'Photo 3' },
    { url: '../../assets/mem-9.png', alt: 'Photo 3' },
    { url: '../../assets/mem-3.png', alt: 'Photo 3' },
    { url: '../../assets/mem-7.png', alt: 'Photo 3' },
    { url: '../../assets/mem-10.png', alt: 'Photo 3' },
    { url: '../../assets/mem-4.png', alt: 'Photo 3' },
  ];
  // members = [
  //   {
  //     photo: '../../assets/rc-member-4.png',
  //     name: 'Dr. B N Gangadhar',
  //     about: 'Former Director, NIMHANS Chairman, National Medical Commission, New Delhi',
  //     speciality: 'Psychiatry, Yoga, Ayurveda'
  //   },

  //   {
  //     photo: '../../assets/rc-member-1.png',
  //     name: 'Dr. H S Subramanya',
  //     about: 'HOD and Professor, Dept. of Biosciences, Chanakya University Former Director Institute of Bioinformatics and Biotechnology, Bengaluru ',
  //     speciality: 'Bioinformatics and Biotechnology'
  //   },

  //   {
  //     photo: '../../assets/rc-member-2.png',
  //     name: 'Dr. Shivarama Varambally',
  //     about: 'Professor of Psychiatry National Institute of Mental Health and Neurosciences, Bengaluru',
  //     speciality: 'Yoga and Psychiatry'
  //   },

  //   {
  //     photo: '../../assets/rc-member-9.png',
  //     name: 'Dr. Kishore Kumar Ramakrishna',
  //     about: 'Professor of Ayurveda,  Department of Integrative Medicine,  National Institute of Mental Health and Neurosciences ',
  //     speciality: 'Ayurveda, Neurophysiology and Yoga'
  //   },

  //   {
  //     photo: '../../assets/rc-member-10.png',
  //     name: 'Dr. Girish Tillu',
  //     about: 'Assistant Professor, Department of Health Sciences Savitribai Phule Pune University',
  //     speciality: 'Ayurveda, Complementary and Integrative Health Principal Investigator- AYUSH Center of Excellence Department of Health Sciences - Savitribai Phule Pune University'
  //   },

  //   {
  //     photo: '../../assets/rc-member-6.png',
  //     name: 'Dr. B Ravishankar',
  //     about: 'Former Head, Pharmacology Laboratory, IPGT & RA, Gujarat, Former Director, SDM Research Centre , Currently an advisor to various Research institutes including CCRAS',
  //     speciality: 'Modern Pharmacology, Ayurveda research'
  //   },

  //   {
  //     photo: '../../assets/rc-member-7.png',
  //     name: 'Dr. Vaibhavi Joshipura',
  //     about: 'Dental surgeon & Periodontist',
  //     speciality: 'Integration of Ayurveda in Dentistry'
  //   },

  //   {
  //     photo: '../../assets/rc-member-12.png',
  //     name: 'Dr. Saraswathi S',
  //     about: ' Chief Research Scientist Department of Aerospace Engineering Indian Institute of Science',
  //     speciality: 'Yoga Research, Engineer'
  //   },

  //   {
  //     photo: '../../assets/rc-member-8.png',
  //     name: 'Dr. S N Omkar',
  //     about: ' Chief Research Scientist Department of Aerospace Engineering Indian Institute of Science',
  //     speciality: 'Yoga Research, Engineer'
  //   },

  //   {
  //     photo: '../../assets/rc-member-5.jpeg',
  //     name: 'Dr. S Srikanta',
  //     about: ' Medical Director and Distinguished Consultant Endocrinology Diabetes',
  //     speciality: 'Internal Medicine, Endocrinology, Diabetes, Yoga, Ayurveda'
  //   },
  //   {
  //     photo: '../../assets/rc-member-3.png',
  //     name: 'Dr. S R Narahari',
  //     about: 'Director, Institute of Applied Dermatology, Kasaragod',
  //     speciality: 'Modern Dermatology Ayurveda and Yoga'
  //   },

  //   {
  //     photo: '../../assets/rc-member-11.png',
  //     name: 'Dr. Ashwini Godbole',
  //     about: 'Associate Professor Centre for Ayurveda Biology and Holistic Nutrition, Transdisciplinary University, Bengaluru',
  //     speciality: 'Botany, Molecular Biology Biophysics'
  //   },

  // ];
  boardMembers = [
    {
        name : "Dr. B. N Gangadhar",
        photo: '../../assets/rc-member-4.png',
        designation : "Chairman",
        department : "NIMHANS",
        role : " Former Director",
        place : "National Medical Commission, New Delhi",
        speciality : "Psychiatry, Yoga, Ayurveda"
    },
    {
        name : "Dr. H. S Subramanya",
        photo: '../../assets/rc-member-1.png',
        designation : "HOD and Professor",
        department : "Dept. of Biosciences, Chanakya University",
        role : "Former Director",
        place : "Institute of Bioinformatics and Biotechnology, Bengaluru",
        speciality : "Bioinformatics and Biotechnology"
    },
    {
        name : "Dr. Shivarama Varambally",
        photo: '../../assets/rc-member-2.png',
        designation : "Professor of Psychiatry ",
        department : "National Institute of Mental Health and Neurosciences, Bengaluru",
        role : "",
        place : "",
        speciality : "Yoga and Psychiatry"
    },
    {
        name : "Dr. Kishore Kumar Ramakrishna",
        photo: '../../assets/rc-member-9.png',
        designation : "Professor of Ayurveda",
        department : "Department of Integrative Medicine",
        role : "",
        place : "National Institute of Mental Health and Neurosciences",
        speciality : "Ayurveda, Neurophysiology and Yoga"
    },
    {
        name : "Dr. Girish Tillu",
        photo: '../../assets/rc-member-10.png',
        designation : "Assistant Professor",
        department : "Department of Health Sciences Savitribai Phule Pune University ",
        role : "Principal Investigator",
        place : "AYUSH Center of Excellence",
        speciality : "Ayurveda, Complementary and Integrative Health"
    },  
    {
        name : "Dr. B Ravishankar",
        photo: '../../assets/rc-member-6.png',
        designation : "Former Head",
        department : "Pharmacology Laboratory, IPGT & RA, Gujarat,",
        role : "Former Director",
        place : "SDM Research Centre , Currently an advisor to various Research institutes including CCRAS",
        speciality : "Modern Pharmacology, Ayurveda research"
    },
    {
        name : "Dr. Vaibhavi Joshipura",
        photo: '../../assets/rc-member-7.png',
        designation : "Dental surgeon & Periodontist",
        department : "",
        role : "",
        place : "",
        speciality : "Integration of Ayurveda in Dentistry "
    },
    {
        name : "Dr. S. N Omkar",
        photo: '../../assets/rc-member-8.png',
        designation : "Chief Research Scientist",
        department : "Department of Aerospace Engineering Indian Institute of Science",
        role : "",
        place : "",
        speciality : "Yoga Research, Engineer"
    },
    {
        name : "Dr. S Srikanta",
        photo: '../../assets/rc-member-5.jpeg',
        designation : "Medical Director",
        department : "",
        role : "Distinguished Consultant Endocrinology Diabetes",
        place : "",
        speciality : "Internal Medicine, Endocrinology, Diabetes, Yoga, Ayurveda"
    },
    {
        name : "Dr. S. R Narahari",
        photo: '../../assets/rc-member-3.png',
        designation : "Director",
        department : "Institute of Applied Dermatology, Kasaragod",
        role : "",
        place : "",
        speciality : "Modern Dermatology, Ayurveda and Yoga"
    },
    {
        name : "Dr. Ashwini Godbole",
        photo: '../../assets/rc-member-11.png',
        designation : "Associate Professor",
        department : "Centre for Ayurveda Biology and Holistic Nutrition, Transdisciplinary University, Bengaluru ",
        role : "",
        place : "",
        speciality : "Botany, Molecular Biology Biophysics"
    }
]
  selectedMember: any = null;

  showPopup(member: any) {
    this.selectedMember = member;
  }

  closePopup() {
    this.selectedMember = null;
  }
}
