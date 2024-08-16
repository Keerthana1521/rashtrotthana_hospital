import { Component } from '@angular/core';

@Component({
  selector: 'app-ophthalmology',
  templateUrl: './ophthalmology.component.html',
  styleUrl: './ophthalmology.component.css'
})
export class OphthalmologyComponent {
  specialities=[
    {
      main_heading:'Ophthalmology',
      content:'Ophthalmologists at JMRH offers a wide range of outpatient & surgical services for diseases related to the eye & surrounding tissues. Modern ophthalmology setup along with a qualified Optometrists are part of the well equipped team. Apart from General ophthalmology, eye surgeries like Cataract surgery & Refractive surgery are performed at affordable cost.',
      heading:'Ophthalmology',
      image:'Ophthalmology.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-45.png',
          doctor_name:'Dr. Sowmya Bhat S'
        }
      ]}];
}
