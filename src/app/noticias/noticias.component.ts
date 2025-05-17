import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importar esto

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule], // 👈 incluir CommonModule acá
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {
  noticiaSeleccionada: number | null = null;

  toggleDetalle(index: number) {
    this.noticiaSeleccionada = this.noticiaSeleccionada === index ? null : index;
  }
}




/*import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent {

}*/
