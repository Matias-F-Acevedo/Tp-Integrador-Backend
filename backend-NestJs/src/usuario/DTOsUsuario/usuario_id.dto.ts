import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class Usuario_id_Dto {
    @Expose()
    @IsNotEmpty()
    @IsString()
    id: string;

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
    
}
