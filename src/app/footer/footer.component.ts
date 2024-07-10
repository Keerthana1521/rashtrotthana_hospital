import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  openLink(type: string) {
    if (type == 'youtube') {
      window.open('https://www.youtube.com/channel/UC5yBntegcZ_lR_IpfkbSVrA', '_blank');
    }
    else if (type == 'facebook') {
      window.open('https://www.facebook.com/rashtrottanahospital', '_blank');
    }
    else if (type == 'twitter') {
      window.open('https://x.com/Jmrhospital', '_blank');
    }
    else if (type == 'instagram') {
      window.open('https://www.instagram.com/rashtrotthanahospital/?fbclid=IwZXh0bgNhZW0CMTEAAR2QboDfEwBQxDe7jIHuAmE-Syn3Y6kRp1NQS6KX71uMpbFO7H-JVHbfYBw_aem_akYFom-c4Mism2XS8h6G-w', '_blank');
    }
  }
}
