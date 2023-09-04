import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Usuario_id_Dto } from './DTOsUsuario/usuario_id.dto';
import { UsuarioDto } from './DTOsUsuario/usuario.dto';

const URL = "http://localhost:3030/usuario"



@Injectable()
export class UsuarioService {

    async getUsuarios(): Promise<Usuario_id_Dto[]> {
        const res = await fetch(URL);
        if (!res.ok) {
            throw new Error()
        } else {
            const parsed = await res.json();
            const arrayUsuario: Usuario_id_Dto[] = []

            parsed.map((user: { id: string; nombre: string; apellido: string; email: string }) => {
                arrayUsuario.push({
                    id: user.id,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    email: user.email
                })
            }
            )
            return arrayUsuario;
        }
    }

    async getUsuarioById(id: string): Promise<Usuario_id_Dto> {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) {
            throw new Error();
        } else {
            const parsed = await res.json();
            return {
                id: parsed.id,
                nombre: parsed.nombre,
                apellido: parsed.apellido,
                email: parsed.email
            };
        }

    }


    async postUsuario(usuario: UsuarioDto) {
        try {
            const newUsuario = { ...usuario, id: (uuidv4().slice(0, -28)) }
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUsuario),
            });
            return { ...newUsuario, contraseña: "********" };

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
            return { success: true, data:{ ...updateUser, contraseña: "********" } };
        } else {
            throw new Error()
        }
    }

}


