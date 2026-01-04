import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  isAdmin(): boolean {
    const user = this.storageService.getUser();
    return !!user && user.role === 'admin';
  }

  createUser() {
    alert('Crear usuario.');
  }

  constructor(private storageService: StorageService) {}
}