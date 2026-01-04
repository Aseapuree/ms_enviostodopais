export interface Envio {
    id?: string;
    codigoTracking?: string;
    fechaCreacion?: string;
    fechaEstimada?: string;
    estado?: string;
    destino?: { id: string; nombre?: string };
    emisor?: { id?: string; correo?: string };
    emisorNombre?: string;
    emisorDni?: string;
    emisorCorreo?: string;
    emisorTelefono?: string;
    receptorNombre?: string;
    receptorDni?: string;
    tipoEntrega?: 'SEDE' | 'DOMICILIO';
    direccionEntrega?: string;
    referenciaEntrega?: string;
    fechaActualizacion?: string;
  }
  