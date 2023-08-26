import { Injectable, NotFoundException } from '@nestjs/common';
import { Propiedad } from './propiedad.interface';
// import{createID,readParse } from '../utils/utils'
import * as fs from 'fs'
import { uuid } from 'uuidv4';
import { join } from 'path'
import { error } from 'console';

const URL = "http://localhost:3030/propiedad"

@Injectable()
export class PropiedadService {

    async getPropiedades() {
        try {
            const res = await fetch(URL);
            const parsed = await res.json();
            return parsed;
        } catch {
            throw new error()
        }

    }

    async getPropiedadById(id: string) {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) {
            throw new NotFoundException("Data not found");
        } else {
            const parsed = await res.json();
            return parsed;
        }
    }





    async postPropiedad(propiedad: any) {
        try {
            const newPropiedad = { id: uuid(), ...propiedad }
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPropiedad),
            });
            return propiedad
        } catch (error) {
            throw new Error("Created failed");
        }
    }


    async deletePropiedadById(id: string) {
            const res = await fetch(`${URL}/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                return { success: true, message: `Propiedad with id: {${id}} was deleted` };
            } else {
                throw new error()
            }
    }


    async updateTrackById(id: string, body: any) {
        const isPropiedad = await this.getPropiedadById(id);
        if (isPropiedad) {
            const updatedPropiedad = { id, ...body };
            await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPropiedad),
            });
            return { success: true, message: `Propiedad edited`, data: `${body}` };
        } else {
            throw new error()
        }
    }
}

