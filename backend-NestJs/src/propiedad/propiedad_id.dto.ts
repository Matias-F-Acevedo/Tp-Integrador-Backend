import { IsInt, IsString, IsOptional, IsNotEmpty, IsNumber } from "class-validator"
import { Expose } from "class-transformer"

export class Propiedad_Id_Dto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  id: string;

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
  tipo_de_propiedad: string;

}