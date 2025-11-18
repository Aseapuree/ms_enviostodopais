export interface Usuario {
    id?: string;
    correo: string;
    password?: string;
    dni?: string;
    name?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    rol?: { id: string; nombre: string } | string;
    activo?: boolean;
  }
  