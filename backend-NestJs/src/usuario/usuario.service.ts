import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Usuario_id_Dto } from './DTOsUsuario/usuario_id.dto';
import { UsuarioDto } from './DTOsUsuario/usuario.dto';
import {cifrarContraseña} from "../hashContraseña/cifrarContraseña"


const URL = "http://localhost:3030/usuario"



@Injectable()
export class UsuarioService {

    async getUsuarios(): Promise<Usuario_id_Dto[]> {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error()
        } else {
            const parsed: Usuario_id_Dto[] = await res.json();
            return parsed;
        }
    }

    async getUsuarioById(id: string): Promise<Usuario_id_Dto> {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) {
            throw new Error();
        } else {
            const parsed: Usuario_id_Dto = await res.json();
            return parsed
        }

    }


    async postUsuario(usuario: UsuarioDto) {
        try {
            const newUsuario: Usuario_id_Dto ={ ...usuario, id: (uuidv4().slice(0, -28)), contraseña: cifrarContraseña(usuario.contraseña)}
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUsuario),
            });
            return newUsuario;

        } catch (error) {
            throw new Error("Created failed");
        }
    }

    async deleteUserById(id: string): Promise<{success: boolean}> {
        const res = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            return {success: true};
        } else {
            throw new Error()
        }
    }

    async updateUserById(id: string, body: UsuarioDto): Promise<{ success: boolean, data: {} }> {
        const isUser = await this.getUsuarioById(id);
        if (isUser) {
            const updateUser = { ...body, id: isUser.id };
            await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateUser),
            });
            return {success: true, data:{ ...updateUser, contraseña: "********"} };
        } else {
            throw new Error()
        }
    }

}


