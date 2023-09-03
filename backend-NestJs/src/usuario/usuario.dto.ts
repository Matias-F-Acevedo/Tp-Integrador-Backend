import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UsuarioDto {
    @Expose()
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    apellido: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    email: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    contraseña: string;

    @Expose()
    @IsNotEmpty()
    propiedades: number[];


}
