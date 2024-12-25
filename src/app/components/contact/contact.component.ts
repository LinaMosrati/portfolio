import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    if (this.validateForm()) {
      // Construct the mailto link
      const subject = encodeURIComponent('Contact Form Submission');
      const body = encodeURIComponent(`Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
      const mailtoLink = `mailto:lina.mesrati@gmail.com?subject=${subject}&body=${body}`;

      // Open the mailto link
      window.location.href = mailtoLink;

      // Reset the form
      this.resetForm();
    }
  }

  // Form validation logic
  validateForm(): boolean {
    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      alert('Please fill out all the fields.');
      return false;
    }

    if (!this.isValidEmail(this.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  }

  // Email validation method
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Method to reset form fields
  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
