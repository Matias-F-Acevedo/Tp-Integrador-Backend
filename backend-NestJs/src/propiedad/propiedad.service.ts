import { Injectable} from '@nestjs/common';
import { PropiedadDto } from './propiedad.dto';
import { v4 as uuidv4 } from 'uuid';
import { Propiedad } from 'src/interface/propiedad.interface';


const URL = "http://localhost:3030/propiedad"

@Injectable()
export class PropiedadService {

    async get():Promise<Propiedad[]> {
        const res = await fetch(URL);
        if (!res.ok) throw new Error()

        const parsed:Propiedad[] = await res.json();
         return parsed;
    }

    async getById(id: string):Promise<Propiedad> {
        const res = await fetch(`${URL}/${id}`);
        if (!res.ok)throw new Error() 
            
        const parsed:Propiedad = await res.json();
        return parsed;
    }


    async post(propiedad: PropiedadDto): Promise<Propiedad> {
        try {
            const newPropiedad:Propiedad = {...propiedad ,id: (uuidv4().slice(0, -28))}
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


    async deleteById(id: string):Promise<{success:boolean}> {
            const res = await fetch(`${URL}/${id}`, {
                method: 'DELETE',
            });

            if (!res.ok) throw new Error()
                
            return {success: true};
    }


    async updateById(id: string, body:PropiedadDto):Promise<{success:boolean, data:Propiedad}> {
        const isPropiedad:Propiedad = await this.getById(id);

        if (!isPropiedad) throw new Error()

        const updatedPropiedad:Propiedad = { ...body, id:isPropiedad.id};
        await fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPropiedad),
        });
        return { success: true, data: updatedPropiedad};
        
    }
}

