import { Expose } from 'class-transformer';
import { IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class PropiedadDto {
  @Expose()
  @IsNotEmpty()
  @IsInt()
  dueño: number;

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
  @Length(4, 15)
  tipo_de_propiedad: string;

}