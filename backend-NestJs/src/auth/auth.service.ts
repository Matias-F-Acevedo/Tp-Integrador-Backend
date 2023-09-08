import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/interface/usuario.interface';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor (private usuarioService:UsuarioService){}
    

    async login(email:string, contraseñaParametro:string):Promise<Usuario>{
        const usuario = await this.usuarioService.buscarUsuario(email);

        if(!bcrypt.compareSync(contraseñaParametro, usuario.contraseña)) throw new Error();

        const rest = {
            id:usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email,
        }
        return rest; 
    }
}
