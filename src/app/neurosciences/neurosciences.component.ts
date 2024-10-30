import { Component } from '@angular/core';

@Component({
  selector: 'app-neurosciences',
  templateUrl: './neurosciences.component.html',
  styleUrl: './neurosciences.component.css'
})
export class NeurosciencesComponent {
  specialities=[
    {
      main_heading:'Neurosciences',
      content:'The Neurosciences Department at Rashtrotthana Hospital is dedicated to delivering specialized, compassionate care for a wide array of neurological conditions affecting the brain, spine and nervous system. Our experienced team of neurologists and neurosurgeons utilizes advanced diagnostic tools, including MRI, CT scans, and neurophysiological tests, to provide precise and timely diagnosis. This enables our experts to create individualized treatment plans for various conditions, such as migraines, epilepsy, movement disorders and neurodegenerative diseases like Parkinson’s and Alzheimer’s. By blending cutting-edge technology with a patient-centered approach, our specialists ensure that patients receive the best possible care tailored to their unique neurological needs.',
      content_1:'In addition to treatment for common conditions, our Neurosciences Department excels in managing complex neurological issues, including stroke rehabilitation, spinal cord injuries, and neurosurgical interventions. Our team offers minimally invasive procedures whenever possible, promoting faster recovery times and reduced discomfort for patients. With comprehensive post-operative care and support from our multidisciplinary staff, we are committed to ensuring each patient’s journey to recovery is both effective and comfortable. The Neurosciences Department at Rashtrotthana Hospital is dedicated to enhancing the quality of life for patients through expert, empathetic and innovative neurological care.',
      heading:'Neurosciences',
      image:'Neurosciences.png',
      Doctors:[
        {
          doctor_image:'../../assets/doctor-38.png',
          doctor_name:'Dr. Jaidev S',
          experience : "4"
        },
        {
          doctor_image:'../../assets/doctor-5.png',
          doctor_name:'Brig (Dr) S. Shashivadhanan',
          experience : "30+"
        },
      ]}];
}
