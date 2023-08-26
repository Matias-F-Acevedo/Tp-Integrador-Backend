import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.interface';
import * as fs from 'fs'
import { uuid } from 'uuidv4';
import {join} from 'path'
const URL = "http://localhost:3030/usuario"



@Injectable()
export class UsuarioService {
    async getUsuarios(): Promise <Usuario[]>{
        const res = await fetch(URL);
        const parsed = await res.json();
        return parsed;
    }
    async getUsuarioById(id:string): Promise <Usuario>{
        const res = await fetch(`${URL}/${id}`);
        const parsed = await res.json();
        return parsed;
    }

    async postUsuario(usuario: any){
        try {
            const nuevoUsuario = {id:uuid(), ... usuario }
    
            const data = JSON.parse(fs.readFileSync((join(__dirname, '../../data/data.json')), 'utf-8'));

            data.usuario.push(nuevoUsuario);
            fs.writeFileSync((join(__dirname, '../../data/data.json')), JSON.stringify(data, null, 2))
            return data
        } catch (error) {
            throw new Error("Created failed");
        }
    }
    
}


