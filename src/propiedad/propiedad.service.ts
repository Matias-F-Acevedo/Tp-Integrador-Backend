import { Injectable } from '@nestjs/common';
import { Propiedad } from './propiedad.interface';
// import{createID,readParse } from '../utils/utils'
import * as fs from 'fs'
import { uuid } from 'uuidv4';
import {join} from 'path'

const URL = "http://localhost:3030/propiedad"

@Injectable()
export class PropiedadService {

    async getPropiedades(): Promise <Propiedad[]>{
        const res = await fetch(URL);
        const parsed = await res.json();
        return parsed;
    }
    async getPropiedadById(id:string): Promise <Propiedad>{
        const res = await fetch(`${URL}/${id}`);
        const parsed = await res.json();
        return parsed;
    }


    async postPropiedad(propiedad: any){
        try {
            const newPropiedad = {id:uuid(), ... propiedad }
           
            const data = JSON.parse(fs.readFileSync((join(__dirname, '../../data/data.json')), 'utf-8'));
          
            data.propiedad.push(newPropiedad);
            fs.writeFileSync((join(__dirname, '../../data/data.json')), JSON.stringify(data, null, 2))
            return data
        } catch (error) {
            throw new Error("Created failed");
        }
    }
    
}
