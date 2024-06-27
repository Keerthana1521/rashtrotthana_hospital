import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-layout',
  templateUrl: './doctor-layout.component.html',
  styleUrl: './doctor-layout.component.css'
})
export class DoctorLayoutComponent {

//   <div class="doctor-box">
//     <div class="image-box">
//         <img [src]='image'>
//     </div>
//     <div class="content-box">
//         <div class="name">
//            {{name}}
//         </div>
//         <div class="desgination">
//             {{desgination}}
//         </div>
//         <div class="about">
//             {{about}}
//         </div>
//     </div>
// </div>
  dcotors =[
    {
      name: 'Dr. KRISHNASWAMY LAKSHMAN',
      image: 'assets/doctor-1.png',
      desgination: 'GENERAL SURGERY',
      about: 'Dr.K. Lakshman, MBBS, MRCS(UK), FRCS- General surgery is willing to be associated with JMRH & RC on a service basis. Dr. Lakshman is a  renowned surgeon having forty-five years...'
    },
    {
      name:'Dr. Latha Venkataram',
      image: 'assets/doctor-2.png',
      desgination: 'OBSTETRICS & GYNECOLOGY',
      about: 'Maternity Unit at JMRH & RC is run by WMN team of OBGYNs headed by Dr. Latha Venkatraman. Dr. Latha Venkatraman is a renowned OBGYN with more than 30 years ...'
    },
    {
      name:'Dr. Atmaram D C',
      image:'assets/doctor-3.png',
      desgination:'SURGERY/LAPROSCOPY/GASTROENTEROLOGY',
      about:'Presently working as Assistant Professor Neurosurgery at Dayanand Sagar Medical College, Kanakpura Road.'
    },
    {name:'Dr. Rajeev Vijayakumar',
    image:'assets/doctor-4.png',
    desgination:'Medical Oncology',
    about:'Dr Rajeev, the very senior consultant whose expertise in Medical Oncology, Hemato Oncology, and Bone Marrow Transplant ensures that your confidence in his ...'},
    {
      name:'Dr. Shashi Vadhanan',
      image:'assets/doctor-5.png',
      desgination:'GENERAL SURGERY',
      about:'Neurosurgeon in practice since 10.5 years. Working in the hospital & state of care health care industry. Skilled in Neurospinal surgical procedures, Clinical Research&, Medical ...'
    },
    {name:'Dr. RAVISHANKAR. D',
    image:'assets/doctor-6.png',
    desgination:'Orthopedic surgeon',
    about:'Dr. RAVISHANKAR. D is a Orthopedic surgeon and has an experience of 38 years in this field. He completed MBBS from Bangalore University, India in 1985 and DNB - Orthopedics ...'}

  ]
}
