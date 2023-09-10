import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/interface/usuario.interface';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor (private usuarioService:UsuarioService, private jwtService: JwtService){}
    

    async login(email:string, contraseñaParametro:string):Promise<{access_token: string}>{
        const usuario = await this.usuarioService.searchByEmail(email);

        if(!bcrypt.compareSync(contraseñaParametro, usuario.contraseña)){    throw new Error();
        }
        // aclaracion: la propiedad "sub" es por el estandar que propone JWT
        const usuarioValidado = {sub: usuario.id, nombre:usuario.nombre, apellido: usuario.apellido, email:usuario.email}

        return {
            // con la funcion singAsync generamos nuestro json wer token (JWT) a partir de un subconjuento de propiedades del "usuarioValidado".
            // retornamos el token como un objeto con el nombre acces_token. 
            access_token: await this.jwtService.signAsync(usuarioValidado),
            
        };

    }
}
