import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TiendasService } from '../../../services/tiendas/tiendas.service';
import { EnviosService } from '../../../services/envios/envios.service';
import { ModalMensajeComponent } from '../../modal-mensaje/modal-mensaje.component';

@Component({
  selector: 'app-crear-envio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ModalMensajeComponent],
  templateUrl: './crear-envio.component.html',
  styleUrls: ['./crear-envio.component.scss']
})
export class CrearEnvioComponent implements OnInit {
  private fb = inject(FormBuilder);
  private tiendasSvc = inject(TiendasService);
  private enviosSvc = inject(EnviosService);

  tiendas: any[] = [];
  isLoading = false;

  // modal data
  modalVisible = false;
  modalSuccess = false;
  modalTitulo = '';
  modalMensaje = '';
  modalCodigo = '';
  modalEstado = '';

  form = this.fb.group({
    receptorNombre: ['', Validators.required],
    receptorDni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    tipoEntrega: ['SEDE', Validators.required],
    destinoId: [null],
    direccionEntrega: [''],
    emisorNombre: [''],
    emisorCorreo: ['', Validators.email]
  });

  ngOnInit(): void {
    this.tiendasSvc.listar().subscribe({
      next: res => (this.tiendas = res.data || []),
      error: () => this.showModal(false, 'Error', 'No se pudieron cargar las tiendas')
    });

    this.form.get('tipoEntrega')?.valueChanges.subscribe(tipo => {
      const dir = this.form.get('direccionEntrega');
      if (tipo === 'DOMICILIO') dir?.setValidators([Validators.required]);
      else dir?.clearValidators();
      dir?.updateValueAndValidity();
    });
  }

  crear() {
    if (this.form.invalid) {
      this.showModal(false, 'Campos incompletos', 'Por favor, completa todos los campos obligatorios.');
      return;
    }

    this.isLoading = true;
    this.enviosSvc.crear(this.form.value).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        if (res?.statusCode === 200) {
          this.showModal(true, 'Envío creado', res.message, res.data.codigoTracking, res.data.estado);
          this.form.reset({ tipoEntrega: 'SEDE' });
        } else {
          this.showModal(false, 'Error', res?.message || 'No se pudo crear el envío.');
        }
      },
      error: () => {
        this.isLoading = false;
        this.showModal(false, 'Error de conexión', 'No se pudo contactar con el servidor.');
      }
    });
  }

  showModal(success: boolean, titulo: string, mensaje: string, codigo: string = '', estado: string = '') {
    this.modalSuccess = success;
    this.modalTitulo = titulo;
    this.modalMensaje = mensaje;
    this.modalCodigo = codigo;
    this.modalEstado = estado;
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
  }
}
