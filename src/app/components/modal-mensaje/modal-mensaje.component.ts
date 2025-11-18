import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-mensaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.scss']
})
export class ModalMensajeComponent {
  @Input() visible = false;
  @Input() success = false;
  @Input() titulo = '';
  @Input() mensaje = '';
  @Input() codigoTracking = '';
  @Input() estado = '';

  @Output() cerrar = new EventEmitter<void>();

  onCerrar() {
    this.visible = false;
    this.cerrar.emit();
  }
}
