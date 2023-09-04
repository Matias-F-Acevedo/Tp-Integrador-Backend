
import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { Propiedad } from './propiedad.interface';
import { Expose } from 'class-transformer';

export enum EstadoPropiedad {
  EnVenta = "En venta",
  EnAlquiler = "En alquiler"
}

    export class PropiedadDto implements Propiedad{
    @IsNotEmpty()
    dueño: number;
     @IsNotEmpty()
    precio: number;
     @IsNotEmpty()
     @IsString()
    ubicacion: string;
     @IsNotEmpty()
     superficieTotal: number;
     @IsNotEmpty()
     superficieCubierta: number;
     @IsNotEmpty()
     ambientes: number;
     @IsNotEmpty()
     tipo_de_propiedad: string;
     @Expose()
     @IsNotEmpty()
     @IsIn([EstadoPropiedad.EnAlquiler,EstadoPropiedad.EnVenta])
  estado_de_propiedad: EstadoPropiedad;

   }
