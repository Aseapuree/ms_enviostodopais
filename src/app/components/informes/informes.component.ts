import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-informes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss']
})
export class InformesComponent {
  selectedClient = '';
  report = { problem: '', actions: '', observations: '' };

  saveDraft() {
    alert('Informe guardado temporalmente.');
  }
  submitReport() {
    alert('Informe enviado.');
  }
}