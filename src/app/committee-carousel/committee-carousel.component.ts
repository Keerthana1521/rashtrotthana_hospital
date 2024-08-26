import { Component } from '@angular/core';

@Component({
  selector: 'app-committee-carousel',
  templateUrl: './committee-carousel.component.html',
  styleUrl: './committee-carousel.component.css'
})
export class CommitteeCarouselComponent {
  members = [
    {
      image : "../../assets/member_1.png",
      name : "Dr. B R RAMAKRISHNA",
      qualification : "BAMS, MD, PhD",
      role : "Chair Person"
    },
    {
      image : "../../assets/member_2.png",
      name : "Dr. Swarnarekha Bhat",
      qualification : "MBBS (MD PAEDIATRICS)",
      role : "Member Secretary"
    },
    {
      image : "../../assets/member_3.png",
      name : "Dr. T. N SATHYAPRAHA",
      qualification : "MBBS MD PhD",
      role : "Basic Medical Scientist"
    },
    {
      image : "../../assets/member_4.png",
      name : "Dr BHAGYA VENKANNA RAO",
      qualification : "PhD",
      role : "Basic Medical Scientist"
    },
    {
      image : "../../assets/member_5.png",
      name : "Dr. NEETINAKUM AR PATIL",
      qualification : "BAMS, PhD",
      role : "Clinician"
    },
    {
      image : "../../assets/member_6.png",
      name : "Dr. SHREELAKSHMI G",
      qualification : "MBBS MD",
      role : "Clinician "
    },
    {
      image : "../../assets/member_7.png",
      name : "Dr. SUCHITHRA S PATIL",
      qualification : "BAMS MD PhD",
      role : "Clinician"
    },
    {
      image : "../../assets/member_8.png",
      name : "Mr. JAGDISHA SHARMA",
      qualification : "",
      role : "Social Scientist"
    },
    {
      image : "../../assets/member_9.png",
      name : "Mr. SUBRAHMANY A BHARATI KONALE",
      qualification : "",
      role : "Social Scientist"
    },
    {
      image : "../../assets/member_11.png",
      name : "Adv. VISHWAJITH K",
      qualification : "",
      role : "Legal Expert"
    },
    {
      image : "../../assets/member_10.png",
      name : "Mr. DURGANNA D",
      qualification : "",
      role : "Lay Person"
    },
    {
      image : "../../assets/member_12.png",
      name : "Dr. SHUBHA MADHUSUDHA",
      qualification : "",
      role : "Member"
    },
    {
      image : "../../assets/member_13.png",
      name : "Dr. VINODKUMAR T. G NAIR",
      qualification : " BAMS",
      role : "Member"
    }
  ]


  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.autoRotate();
  }

  getPositionClass(index: number): string {
    const total = this.members.length;
    const leftIndex = (this.currentIndex - 1 + total) % total;
    const rightIndex = (this.currentIndex + 1) % total;

    if (index === this.currentIndex) {
      return 'active';
    } else if (index === leftIndex) {
      return 'left';
    } else if (index === rightIndex) {
      return 'right';
    }
    return '';
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.members.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.members.length) % this.members.length;
  }

  autoRotate(): void {
    setInterval(() => {
      this.next();
    }, 3000);
  }
}
