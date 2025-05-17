/*import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  usuario = '';
  contrasena = '';
  error = false;

  constructor(private router: Router) {}

  onLogin() {
    if (this.usuario === 'admin' && this.contrasena === '1234') {
      this.error = false;
      // Redirigir a otra página (dashboard, inicio, etc.)
      this.router.navigate(['/inicio']);
    } else {
      this.error = true;
    }
  }
}*/
