import { Distrito } from "./ubigeo.model";

export interface Tienda {
  id?: string;
  nombre: string;
  direccion: string;
  latitud?: number;
  longitud?: number;
  fechaCreacion?: string;
  fechaActualizacion?: string;
  usuarioCreacion?: string;
  usuarioActualizacion?: string;
  distrito?: Distrito;  
}
