import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../services/ubicacion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ubicanos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ubicanos.component.html',
  styleUrls: ['./ubicanos.component.scss']
})
export class UbicanosComponent implements OnInit {
  departamentos: any[] = [];
  provincias: any[] = [];
  distritos: any[] = [];

  departamentoSeleccionado: string = '';
  provinciaSeleccionada: string = '';
  distritoSeleccionado: string = '';

  provinciaHabilitada: boolean = false;
  distritoHabilitado: boolean = false;

  constructor(private ubicacionservice: UbicacionService) {}

  ngOnInit(): void {
    /*this.cargarDepartamentos();*/
  }

  cargarDepartamentos(): void {
    this.ubicacionservice.getDepartamentos().subscribe(
      (data) => {
        this.departamentos = data;
      },
      (error) => {
        console.error('Error al cargar departamentos:', error);
      }
    );
  }

  onDepartamentoChange(): void {
    this.provinciaHabilitada = true;
    this.distritoHabilitado = false;
    this.provinciaSeleccionada = '';
    this.distritoSeleccionado = '';
    this.provincias = [];
    this.distritos = [];

    this.ubicacionservice.getProvincias(this.departamentoSeleccionado).subscribe(
      (data) => {
        this.provincias = data;
      },
      (error) => {
        console.error('Error al cargar provincias:', error);
      }
    );
  }

  onProvinciaChange(): void {
    this.distritoHabilitado = true;
    this.distritoSeleccionado = '';
    this.distritos = [];

    this.ubicacionservice.getDistritos(this.provinciaSeleccionada).subscribe(
      (data) => {
        this.distritos = data;
      },
      (error) => {
        console.error('Error al cargar distritos:', error);
      }
    );
  }

  buscarTienda(): void {
    console.log('Buscando tienda en:', {
      departamento: this.departamentoSeleccionado,
      provincia: this.provinciaSeleccionada,
      distrito: this.distritoSeleccionado
    });
  }

  verMapa(): void {
    console.log('Mostrando mapa para:', {
      departamento: this.departamentoSeleccionado,
      provincia: this.provinciaSeleccionada,
      distrito: this.distritoSeleccionado
    });
  }
}




/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UbicacionService } from '../services/apiubicacion.service';

@Component({
  selector: 'app-ubicanos',
  standalone: true,
  templateUrl: './ubicanos.component.html',
  styleUrls: ['./ubicanos.component.scss']
})
export class UbicanosComponent implements OnInit {
  departamentos: any[] = [];
  provincias: any[] = [];
  distritos: any[] = [];

  departamentoSeleccionado: string = '';
  provinciaSeleccionada: string = '';
  distritoSeleccionado: string = '';

  provinciaHabilitada: boolean = false;
  distritoHabilitado: boolean = false;

  constructor(private http: HttpClient, private ubicacionservice: UbicacionService) {}
  
  data:any="";
  ngOnInit(): void {
    this.cargarDepartamentos();
    this.ubicacionservice.finubicacion().subscribe((data:any)=>{
      console.log("mensaje", data.results)
       this.data=data.results[0]});
  }

  cargarDepartamentos(): void {
    this.http.get<any[]>('https://api.ejemplo.com/departamentos').subscribe(
      (data) => {
        this.departamentos = data;
      },
      (error) => {
        console.error('Error al cargar departamentos:', error);
      }
    );
  }

  onDepartamentoChange(): void {
    this.provinciaHabilitada = true;
    this.distritoHabilitado = false;
    this.provinciaSeleccionada = '';
    this.distritoSeleccionado = '';
    this.provincias = [];
    this.distritos = [];

    this.http
      .get<any[]>(`https://api.ejemplo.com/provincias?departamento=${this.departamentoSeleccionado}`)
      .subscribe(
        (data) => {
          this.provincias = data;
        },
        (error) => {
          console.error('Error al cargar provincias:', error);
        }
      );
  }

  onProvinciaChange(): void {
    this.distritoHabilitado = true;
    this.distritoSeleccionado = '';
    this.distritos = [];

    this.http
      .get<any[]>(`https://api.ejemplo.com/distritos?provincia=${this.provinciaSeleccionada}`)
      .subscribe(
        (data) => {
          this.distritos = data;
        },
        (error) => {
          console.error('Error al cargar distritos:', error);
        }
      );
  }

  buscarTienda(): void {
    console.log('Buscando tienda en:', {
      departamento: this.departamentoSeleccionado,
      provincia: this.provinciaSeleccionada,
      distrito: this.distritoSeleccionado
    });
  }

  verMapa(): void {
    console.log('Mostrando mapa para:', {
      departamento: this.departamentoSeleccionado,
      provincia: this.provinciaSeleccionada,
      distrito: this.distritoSeleccionado
    });
  }
}
*/