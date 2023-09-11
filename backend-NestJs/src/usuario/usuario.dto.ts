import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UsuarioDto {
    @Expose()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(15)
    nombre: string;
    
    @Expose()
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(15)
    apellido: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @Expose()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    contraseña: string;
}
