import { Injectable, NotFoundException } from '@nestjs/common';
import { PropiedadDto } from './DTOsPropiedad/propiedad.dto';
import { v4 as uuidv4 } from 'uuid';
import { Propiedad_Id_Dto } from './DTOsPropiedad/propiedad_id.dto';


const URL = "http://localhost:3030/propiedad"

@Injectable()
export class PropiedadService {

    async getPropiedades():Promise<Propiedad_Id_Dto[]> {
        try {
            const res = await fetch(URL);
            const parsed:Propiedad_Id_Dto[] = await res.json();
            return parsed;
        } catch {
            throw new Error()
        }

    }

    async getPropiedadById(id: string):Promise<Propiedad_Id_Dto> {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok) {
            throw new NotFoundException("Data not found");
        } else {
            const parsed:Propiedad_Id_Dto = await res.json();
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


    async deletePropiedadById(id: string):Promise<{success:boolean,message:string}> {
            const res = await fetch(`${URL}/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                return { success: true, message: `Propiedad with id: {${id}} was deleted` };
            } else {
                throw new Error()
            }
    }


    async updateTrackById(id: string, body:PropiedadDto):Promise<{success:boolean, message:string, data:Propiedad_Id_Dto}> {
        const isPropiedad:Propiedad_Id_Dto = await this.getPropiedadById(id);

        if (isPropiedad) {
            const updatedPropiedad:Propiedad_Id_Dto = { id:isPropiedad.id, ...body };
            await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPropiedad),
            });
            return { success: true, message: `Propiedad edited`, data: updatedPropiedad};
        } else {
            throw new Error()
        }
    }
}

