import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  submitContact() {
    if (this.name && this.email && this.message) {
      alert(`Mensaje enviado por ${this.name}`);
    }
  }
}
