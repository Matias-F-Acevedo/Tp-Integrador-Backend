import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid';
import { join } from 'path'
import { error } from 'console';
import { PropiedadDto } from 'src/propiedad/propiedad.dto';
import { Usuario_id_Dto } from './usuario_id.dto';
import { UsuarioDto } from './usuario.dto';
const URL = "http://localhost:3030/usuario"



@Injectable()
export class UsuarioService {

    async getUsuarios():Promise<Usuario_id_Dto[]> {

        try {
            const res = await fetch(URL);
            const parsed = await res.json();
            const arrayPropiedades: Usuario_id_Dto[] = []
            parsed.map((user: { id: string; nombre: string; apellido: string; email: string; propiedades: number[]}) => {
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

    async getUsuarioById(id: string):Promise<Usuario_id_Dto> {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) {
            throw new NotFoundException("Data not found");
        } else {
            const parsed = await res.json();
            return {
                id: parsed.id,
                nombre: parsed.nombre,
                apellido: parsed.apellido,
                email: parsed.email,
                propiedades: parsed.propiedades
            };
        }

    }


    async postUsuario(usuario: UsuarioDto) {
        try {
            const newUsuario = { ...usuario ,id: (uuidv4().slice(0, -28))}
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUsuario),
            });
            return {...newUsuario, contraseña: "********"};

        } catch (error) {
            throw new Error("Created failed");
        }
    }

    async deleteUserById(id: string):Promise<{success:boolean, message:string}>{
        const res = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            return { success: true, message: `User with id: {${id}} was deleted`};
        } else {
            throw new error()
        }
    }

    async updateUserById(id:string, body: any){
        const isUser = await this.getUsuarioById(id);
        if (isUser) {
            const updateUser = {id: id, ...body };
            await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateUser),
            });
            return { success: true, message: `User edited`, data: `${{...updateUser, contraseña: "********"}}` };
        } else {
            throw new error()
        }
    }

}


