import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UsuarioDto } from './usuario.dto';
import { Usuario, Usuario_Contraseña } from 'src/interface/usuario.interface';
import * as bcrypt from 'bcrypt';
const URL = "http://localhost:3030/usuario"



@Injectable()
export class UsuarioService {

    async get(): Promise<Usuario[]> {
        const res = await fetch(URL);
        if (!res.ok) throw new Error()

        const parsed = await res.json();

        const UsuariosSinContraseña: Usuario[] = parsed.map((u: any) => u = {
            id: u.id,
            nombre: u.nombre,
            apellido: u.apellido,
            email: u.email,
        })
        return UsuariosSinContraseña;
    }

    async getById(id: string): Promise<Usuario> {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) throw new Error();

        const parsed = await res.json();

        return {
            id: parsed.id,
            nombre: parsed.nombre,
            apellido: parsed.apellido,
            email: parsed.email,
        }
    }


    async post(usuario: UsuarioDto): Promise<Usuario> {
        try {
            const newUsuario = { ...usuario, id: (uuidv4().slice(0, -28)),contraseña: bcrypt.hashSync(usuario.contraseña,8) }
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUsuario),
            });
            return {
                id: newUsuario.id,
                nombre: newUsuario.nombre,
                apellido: newUsuario.apellido,
                email: newUsuario.email,
            }
        } catch (error) {
            throw new Error("Created failed");
        }
    }

    async deleteById(id: string): Promise<{ success: boolean }> {
        const res = await fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error()

        return { success: true };
    }

    async updateById(id: string, body: UsuarioDto): Promise<{ success: boolean, data: Usuario }> {
        const isUser = await this.getById(id);

        if (!isUser) throw new Error()

        const updateUser = { ...body, id: isUser.id, contraseña: bcrypt.hashSync(body.contraseña, 8)};
        await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        });
        return {
            success: true, data: {
                id: updateUser.id,
                nombre: updateUser.nombre,
                apellido: updateUser.apellido,
                email: updateUser.email,
            }
        };
    }

    async searchByEmail(email: string):Promise<Usuario_Contraseña>{
        const res = await fetch(URL);
        if (!res.ok) throw new Error()

        const usuarios = await res.json();
        const user:Usuario_Contraseña = usuarios.find((usuario: Usuario_Contraseña) => usuario.email === email);
        return user;
    }
}


