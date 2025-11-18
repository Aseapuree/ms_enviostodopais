// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { AuthService } from '../../services/auth/auth.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   private fb = inject(FormBuilder);
//   private auth = inject(AuthService);
//   private router = inject(Router);
//   private toastr = inject(ToastrService);

//   form = this.fb.group({
//     correo: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(6)]],
//   });

//   login() {
//     if (this.form.invalid) {
//       this.toastr.error('Completa los campos correctamente');
//       this.form.markAllAsTouched();
//       return;
//     }

//     const { correo, password } = this.form.value;
//     this.auth.login(correo!, password!).subscribe({
//       next: (res: any) => {
//         if (res?.statusCode === 200) {
//           const role = res.data.role;
//           this.toastr.success('Bienvenido ' + role);
//           if (role === 'Administrador') this.router.navigate(['/dashboard']);
//           else if (role === 'Operador') this.router.navigate(['/envios/crear']);
//           else this.router.navigate(['/envios/mis-envios']);
//         } else {
//           this.toastr.error(res.message || 'Error al iniciar sesión');
//         }
//       },
//       error: () => this.toastr.error('Error de conexión con el servidor')
//     });
//   }
// }

// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
// import { Router, RouterModule } from '@angular/router';
// import { ToastrService, ToastrModule } from 'ngx-toastr';
// import { AuthService } from '../../services/auth/auth.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastrModule],
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   private fb = inject(FormBuilder);
//   private auth = inject(AuthService);
//   private router = inject(Router);
//   private toastr = inject(ToastrService);

//   form = this.fb.group({
//     correo: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(6)]],
//     dni: [''],
//     nuevaPassword: ['']
//   });

//   resetMode = false;

//   ngOnInit() {
//     this.toggleResetMode(false); // Default to login mode
//   }

//   onSubmit() {
//     if (this.form.invalid) {
//       this.toastr.error('Completa los campos correctamente');
//       this.form.markAllAsTouched();
//       return;
//     }

//     if (!this.resetMode) {
//       const { correo, password } = this.form.value;
//       this.auth.login(correo!, password!).subscribe({
//         next: (res: any) => {
//           if (res?.statusCode === 200) {
//             const role = res.data.role;
//             this.toastr.success(`Bienvenido ${role}`);
//             if (role === 'Administrador') this.router.navigate(['/dashboard']);
//             else if (role === 'Operador') this.router.navigate(['/envios/crear']);
//             else this.router.navigate(['/envios/mis-envios']);
//           } else {
//             this.toastr.error(res.message || 'Error al iniciar sesión');
//           }
//         },
//         error: () => this.toastr.error('Error de conexión con el servidor')
//       });
//     } else {
//       const { correo, dni, nuevaPassword } = this.form.value;
//       this.auth.resetPassword(correo!, dni!, nuevaPassword!).subscribe({
//         next: (res: any) => {
//           if (res?.statusCode === 200) {
//             this.toastr.success('Contraseña restablecida con éxito');
//             this.toggleResetMode(false);
//           } else {
//             this.toastr.error(res.message || 'Error al restablecer contraseña');
//           }
//         },
//         error: () => this.toastr.error('Error de conexión con el servidor')
//       });
//     }
//   }

//   toggleResetMode(reset = true) {
//     this.resetMode = reset;
//     this.form.reset(); // Limpia los campos al alternar
//     if (reset) {
//       this.form = this.fb.group({
//         correo: ['', [Validators.required, Validators.email]],
//         password: [''],
//         dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
//         nuevaPassword: ['', [Validators.required, Validators.minLength(6)]]
//       });
//     } else {
//       this.form = this.fb.group({
//         correo: ['', [Validators.required, Validators.email]],
//         password: ['', [Validators.required, Validators.minLength(6)]],
//         dni: [''],
//         nuevaPassword: ['']
//       });
//     }
//   }
// }

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ToastrModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private toastr = inject(ToastrService);

  form = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    dni: [''],
    nuevaPassword: ['']
  });

  resetMode = false;

  ngOnInit() {
    this.toggleResetMode(false); // Default to login mode
  }

  onSubmit() {
    if (this.form.invalid) {
      this.toastr.error('Completa los campos correctamente');
      this.form.markAllAsTouched();
      return;
    }

    if (!this.resetMode) {
      const { correo, password } = this.form.value;
      this.auth.login(correo!, password!).subscribe({
        next: (res: any) => {
          if (res?.statusCode === 200) {
            const role = res.data.role;
            this.toastr.success(`Bienvenido ${role}`);
            // Recargar y redirigir al inicio
            setTimeout(() => {
              window.location.href = '/'; // Redirige al inicio y recarga
            }, 100);
          } else {
            this.toastr.error(res.message || 'Error al iniciar sesión');
          }
        },
        error: () => this.toastr.error('Error de conexión con el servidor')
      });
    } else {
      const { correo, dni, nuevaPassword } = this.form.value;
      this.auth.resetPassword(correo!, dni!, nuevaPassword!).subscribe({
        next: (res: any) => {
          if (res?.statusCode === 200) {
            this.toastr.success('Contraseña restablecida con éxito');
            this.toggleResetMode(false);
          } else {
            this.toastr.error(res.message || 'Error al restablecer contraseña');
          }
        },
        error: () => this.toastr.error('Error de conexión con el servidor')
      });
    }
  }

  toggleResetMode(reset = true) {
    this.resetMode = reset;
    this.form.reset();
    if (reset) {
      this.form = this.fb.group({
        correo: ['', [Validators.required, Validators.email]],
        password: [''],
        dni: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
        nuevaPassword: ['', [Validators.required, Validators.minLength(6)]]
      });
    } else {
      this.form = this.fb.group({
        correo: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        dni: [''],
        nuevaPassword: ['']
      });
    }
  }
}