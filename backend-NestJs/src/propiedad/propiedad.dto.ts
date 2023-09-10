import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length,IsIn } from 'class-validator';
import { EstadoPropiedad } from 'src/interface/propiedad.interface';


export class PropiedadDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(8, 8)
  propietario: string;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  precio: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(4)
  ubicacion: string;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  superficieTotal: number;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  superficieCubierta: number;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  ambientes: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(4, 15)
  tipo_de_propiedad: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @IsIn([EstadoPropiedad.EnAlquiler,EstadoPropiedad.EnVenta])
  estado_de_propiedad: EstadoPropiedad;
}
