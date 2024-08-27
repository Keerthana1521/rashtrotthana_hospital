import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrl: './research.component.css'
})
export class ResearchComponent {
  
  specialFeatures = [
    {
      title : "Experienced and GCP-Trained Team: ",
      description : "Our research investigators are highly experienced and trained in Good Clinical Practice (GCP), supported by a dedicated full-time GCP-trained research team."
    },
    {
      title : "Updated SOPs: ",
      description : "Our research-related activities adhere to Standard Operating Procedures (SOPs) that are regularly updated in accordance with national and international regulations"
    },
    {
      title : "Institutional Ethical Committee: ",
      description : " Our Ethical Committee comprises experienced experts from various fields dedicated to ensuring the integrity and ethical standards of our research."
    },
    {
      title : "Scientific Advisory Board: ",
      description : "Distinguished scholars from various branches of science contribute their valuable knowledge to the planning and designing of systematized proposals."
    },
    {
      title : "Advanced Data Monitoring System: ",
      description : "We employ a well-designed data monitoring system to ensure accuracy and reliability in our research activities."
    },
    {
      title : "Extensive Library Resources: ",
      description : "Our library houses a vast collection of books on both traditional and modern medicine, providing a rich resource for researchers."
    },
    {
      title : "Online Journal Access: ",
      description : "We offer online access to a variety of indexed international journals, keeping our researchers updated with the latest scientific advancements."
    },
    {
      title : "Fully Equipped Laboratory: ",
      description : "The Centre boasts fully equipped lab facilities for various investigations and includes sample storage units to support extensive research activities."
    },
    {
      title : "Collaborative Trials: ",
      description : "We collaborate with sister institutes to conduct comprehensive in vitro and in vivo trials, enhancing the scope and impact of our research."
    },
  ]
}
