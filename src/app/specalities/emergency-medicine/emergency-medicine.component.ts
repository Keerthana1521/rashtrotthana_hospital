import { Component } from '@angular/core';


@Component({
  selector: 'app-emergency-medicine',
  templateUrl: './emergency-medicine.component.html',
  styleUrl: './emergency-medicine.component.css'
})
export class EmergencyMedicineComponent {
  specialities=[
    {
      main_heading:'emergency medicine',
      content:'At Rashtrotthana Hospital, our Emergency Medicine Department is here to provide immediate and expert care when you need it most. We train our dedicated team of specialists to handle a wide range of medical emergencies with precision and care, ensuring that patients receive the urgent attention they require in critical moments.    Equipped with advanced technology and supported by a coordinated network of medical professionals, our department is ready to address various medical conditions, from minor injuries to life-threatening emergencies. Whether it s a sudden illness, severe injury, or medical crisis, our team is prepared to respond swiftly and decisively, providing expert medical care 24/7',
      heading:'Emergency Medicine',
      image:'emergency medicine.png',
      Doctors:[
        {
          doctor_image:'Dr. H N Shyla.png',
          doctor_name:'Dr. H N Shyla'
        },
        {
          doctor_image:'Dr.Geethanjali K G.png',
          doctor_name:'Dr.Geethanjali K G'
        }
      ]}];
}
