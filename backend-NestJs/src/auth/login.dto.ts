import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";


export class LoginDto {
    @IsEmail()
    email:string;

    @MinLength(5)
    @MaxLength(15)
    @IsString()
    contraseña:string;
}