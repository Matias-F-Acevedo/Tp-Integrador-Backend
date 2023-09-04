import { IsInt, IsString, IsNotEmpty} from "class-validator"
import { Expose } from "class-transformer"

export class Propiedad_Id_Dto {

  // Expose: indica que una propiedad de una clase debe ser incluida en las tranformaciones de objetos, habilitadas en el controlador(por supuesto, va en todos, ya que queremos que los identifique del tipo DTO una vez tranformado).

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