import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TiendasService } from '../../services/tiendas/tiendas.service';
import { UbicacionService } from '../../services/ubicacion.service';

import { Tienda } from '../../shared/models/tienda.model';
import { Departamento, Provincia, Distrito } from '../../shared/models/ubigeo.model';

@Component({
  selector: 'app-ubicanos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './locate-us.component.html',
  styleUrls: ['./locate-us.component.scss']
})
export class LocateUsComponent implements OnInit {

  // 🔹 Tiendas
  tiendas: Tienda[] = [];
  filteredStores: Tienda[] = [];
  pagedStores: Tienda[] = [];

  // 🔹 Ubigeo
  departamentos: Departamento[] = [];
  provincias: Provincia[] = [];
  distritos: Distrito[] = [];

  selectedDepartamentoCode = '';
  selectedProvinciaCode = '';
  selectedDistritoCode = '';

  // 🔹 Buscador
  searchText = '';

  // 🔹 Paginación
  currentPage = 1;
  itemsPerPage = 6;

  constructor(
    private tiendasService: TiendasService,
    private ubigeoService: UbicacionService
  ) {}

  ngOnInit(): void {
    this.loadTiendas();
    this.loadDepartamentos();
  }

  // =======================
  //   CARGA DE DATOS
  // =======================

  loadTiendas() {
    this.tiendasService.listar().subscribe({
      next: (res) => {
        this.tiendas = res.data || [];
        this.filteredStores = [...this.tiendas];
        this.updatePagedStores();
      }
    });
  }

  loadDepartamentos() {
    this.ubigeoService.getDepartamentos().subscribe({
      next: (res) => {
        this.departamentos = res.data || [];
      }
    });
  }

  onDepartamentoChange() {
    this.selectedProvinciaCode = '';
    this.selectedDistritoCode = '';
    this.provincias = [];
    this.distritos = [];

    if (!this.selectedDepartamentoCode) {
      this.filterStores();
      return;
    }

    this.ubigeoService.getProvincias(this.selectedDepartamentoCode).subscribe({
      next: (res) => {
        this.provincias = res.data || [];
      }
    });

    this.filterStores();
  }

  onProvinciaChange() {
    this.selectedDistritoCode = '';
    this.distritos = [];

    if (!this.selectedProvinciaCode) {
      this.filterStores();
      return;
    }

    this.ubigeoService.getDistritos(this.selectedProvinciaCode).subscribe({
      next: (res) => {
        this.distritos = res.data || [];
      }
    });

    this.filterStores();
  }

  onDistritoChange() {
    this.filterStores();
  }

  // =======================
  //   FILTRO + BUSCADOR
  // =======================

  filterStores() {
    const query = this.searchText.trim().toLowerCase();

    this.filteredStores = this.tiendas.filter(t =>
      (!this.selectedDepartamentoCode ||
        t.distrito?.provincia?.departamento?.codigo === this.selectedDepartamentoCode) &&
      (!this.selectedProvinciaCode ||
        t.distrito?.provincia?.codigo === this.selectedProvinciaCode) &&
      (!this.selectedDistritoCode ||
        t.distrito?.codigo === this.selectedDistritoCode) &&
      (!query ||
        t.nombre.toLowerCase().includes(query) ||
        t.direccion.toLowerCase().includes(query))
    );

    this.currentPage = 1;
    this.updatePagedStores();
  }

  // =======================
  //      PAGINACIÓN
  // =======================

  updatePagedStores() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedStores = this.filteredStores.slice(start, end);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedStores();
  }

  get totalPages(): number {
    return Math.ceil(this.filteredStores.length / this.itemsPerPage);
  }

  // =======================
  //    UTILIDADES
  // =======================

  verEnMapa(store: Tienda) {
    if (store.latitud && store.longitud) {
      const url = `https://www.google.com/maps?q=${store.latitud},${store.longitud}`;
      window.open(url, '_blank');
    }
  }
}
