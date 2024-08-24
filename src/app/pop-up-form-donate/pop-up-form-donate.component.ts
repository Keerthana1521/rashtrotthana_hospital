import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up-form-donate',
  templateUrl: './pop-up-form-donate.component.html',
  styleUrl: './pop-up-form-donate.component.css'
})
export class PopUpFormDonateComponent {
  showPopup: boolean = true;
  user = {
    name: '',
    phone: '',
    email: '',
    amount: ''
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('User Details:', this.user);
    this.showPopup = false; // Close the popup after submission
  }
  closePopup() {
    this.showPopup = false; // Close the popup when the close button is clicked
  }
}
