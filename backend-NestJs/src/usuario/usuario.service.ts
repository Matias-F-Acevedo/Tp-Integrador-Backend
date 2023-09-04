import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from './usuario.interface';
import { uuid } from 'uuidv4';
import { join } from 'path'
import { error } from 'console';
const URL = "http://localhost:3030/usuario"



@Injectable()
export class UsuarioService {

    async getUsuarios() {

        try {
            const res = await fetch(URL);
            const parsed = await res.json();
            const arrayPropiedades: any[] = []
            parsed.map((user: { id: any; nombre: any; apellido: any; email: any; propiedades: any;}) => {
                arrayPropiedades.push({
                    id: user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email,
                    propiedades: user.propiedades
                })
            }
            )
            return arrayPropiedades;
        } catch {
            throw new error()
        }

    }

    async getUsuarioById(id: string) {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) {
            throw new NotFoundException("Data not found");
        } else {
            const parsed = await res.json();
            return ({
                id: parsed.id,
                nombre: parsed.nombre,
                apellido: parsed.apellido,
                email: parsed.email,
                propiedades: parsed.propiedades
            });
        }

    }


    async postUsuario(usuario: Usuario) {
        try {
            const newUsuario = { id: uuid(), ...usuario }
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUsuario),
            });
            return usuario

        } catch (error) {
            throw new Error("Created failed");
        }
    }

}


