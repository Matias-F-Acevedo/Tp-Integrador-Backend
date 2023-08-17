import { Injectable } from '@nestjs/common';
import { Propiedad } from './propiedad.interface';

const URL = "http://localhost:3030/propiedad"

@Injectable()
export class PropiedadService {
    async getPropiedades(): Promise <Propiedad[]>{
        const res = await fetch(URL);
        const parsed = await res.json();
        return parsed;
    }

    
}
