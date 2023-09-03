import { Injectable, NotFoundException } from '@nestjs/common';
import { PropiedadDto } from './propiedad.dto';
// import{createID,readParse } from '../utils/utils'
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid';
import { join } from 'path'
import { error } from 'console';
import { Propiedad_Id_Dto } from './propiedad_id.dto';
import { promises } from 'dns';

const URL = "http://localhost:3030/propiedad"

@Injectable()
export class PropiedadService {

    async getPropiedades():Promise<Propiedad_Id_Dto[]> {
        try {
            const res = await fetch(URL);
            const parsed = await res.json();
            return parsed;
        } catch {
            throw new error()
        }

    }

    async getPropiedadById(id: string):Promise<Propiedad_Id_Dto> {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) {
            throw new NotFoundException("Data not found");
        } else {
            const parsed = await res.json();
            return parsed;
        }
    }





    async postPropiedad(propiedad: PropiedadDto): Promise<Propiedad_Id_Dto> {
        try {
            const newPropiedad:Propiedad_Id_Dto = {...propiedad ,id: (uuidv4().slice(0, -28))}
            await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPropiedad),
            });
            return newPropiedad;
        } catch (error) {
            throw new Error("Created failed");
        }
    }


    async deletePropiedadById(id: string):Promise<{success:boolean,message:string }> {
            const res = await fetch(`${URL}/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                return { success: true, message: `Propiedad with id: {${id}} was deleted` };
            } else {
                throw new error()
            }
    }


    async updateTrackById(id: string, body:PropiedadDto):Promise<{success:boolean, message:string, data:Propiedad_Id_Dto}> {
        const isPropiedad = await this.getPropiedadById(id);

        if (isPropiedad) {
            const updatedPropiedad:Propiedad_Id_Dto = { id, ...body };
            await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPropiedad),
            });
            return { success: true, message: `Propiedad edited`, data: updatedPropiedad};
        } else {
            throw new error()
        }
    }
}

