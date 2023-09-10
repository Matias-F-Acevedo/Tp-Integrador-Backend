
export interface Propiedad {
    id:string;
    propietario: string;
    precio: number;
    ubicacion: string;
    superficieTotal: number;
    superficieCubierta: number;
    ambientes: number;
    tipo_de_propiedad: string;
    estado_de_propiedad:EstadoPropiedad; 
}

export enum EstadoPropiedad {
    EnVenta = "En venta",
    EnAlquiler = "En alquiler"
  }