import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.interface';
const URL = "http://localhost:3030/usuario"



@Injectable()
export class UsuarioService {
    async getUsuarios(): Promise <Usuario[]>{
        const res = await fetch(URL);
        const parsed = await res.json();
        return parsed;
    }
}


