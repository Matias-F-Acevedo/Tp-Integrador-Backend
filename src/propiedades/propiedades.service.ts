import { Injectable } from '@nestjs/common';
import { Propiedades } from './propiedades.interface';

const URL = "http://localhost:3030/propiedades"

@Injectable()
export class PropiedadesService {
    async getPropiedades(): Promise <Propiedades[]>{
        const res = await fetch(URL);
        const parsed = await res.json();
        return parsed;
    }

    
}
