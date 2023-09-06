import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Usuario_id_Dto } from './DTOsUsuario/usuario_id.dto';
import { UsuarioDto } from './DTOsUsuario/usuario.dto';
import {cifrarContraseña} from "../hashContraseña/cifrarContraseña"

const URL = "http://localhost:3030/usuario"



@Injectable()
export class UsuarioService {

    async get(): Promise<Usuario_id_Dto[]> {
        const res = await fetch(URL);
        if (!res.ok) throw new Error()

        const parsed: Usuario_id_Dto[] = await res.json();
        return parsed;
    }

    async getById(id: string): Promise<Usuario_id_Dto> {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) throw new Error();

        const parsed: Usuario_id_Dto = await res.json();
        return parsed
    }


    async post(usuario: UsuarioDto) {
        try {
            const newUsuario: Usuario_id_Dto ={ ...usuario, id: (uuidv4().slice(0, -28)), contraseña: cifrarContraseña(usuario.contraseña)}
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUsuario),
            });
            return { ...newUsuario, contraseña: "********"}
        } catch (error) {
            throw new Error("Created failed");
        }
    }

    async deleteById(id: string): Promise<{success: boolean}> {
        const res = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok)  throw new Error()

        return {success: true};  
    }

    async updateById(id: string, body: UsuarioDto): Promise<{ success: boolean, data:Usuario_id_Dto }> {
        const isUser = await this.getById(id);
        
        if (!isUser) throw new Error() 

        const updateUser:Usuario_id_Dto = { ...body, id: isUser.id, contraseña: cifrarContraseña(body.contraseña)};
        await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        });
        return {success: true, data:{ ...updateUser, contraseña: "********"} };
    }

}


