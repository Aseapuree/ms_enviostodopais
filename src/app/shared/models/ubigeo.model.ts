export interface Departamento {
    id: string;
    nombre: string;
    codigo: string;
  }
  
  export interface Provincia {
    id: string;
    nombre: string;
    codigo: string;
    departamento: Departamento;   
  }
  
  export interface Distrito {
    id: string;
    nombre: string;
    codigo: string;
    provincia: Provincia;         
  }
  