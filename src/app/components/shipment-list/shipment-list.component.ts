import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnviosService } from '../../services/envios/envios.service';
import { Envio } from '../../shared/models/envio.model';

@Component({
  selector: 'app-shipment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit {
  shipments: Envio[] = [];
  selectedShipment: Envio | null = null;
  mostrarModal = false;

  constructor(private enviosService: EnviosService) {}

  ngOnInit(): void {
    this.enviosService.listar().subscribe({
      next: (res) => {
        this.shipments = res.data || [];
      },
      error: () => {
        console.error('Error al cargar los envíos');
      }
    });
  }

  verDetalles(shipment: Envio): void {
    this.selectedShipment = shipment;
    this.mostrarModal = true;
    document.body.style.overflow = 'hidden'; // Evita scroll del fondo
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.selectedShipment = null;
    document.body.style.overflow = 'auto';
  }
}
