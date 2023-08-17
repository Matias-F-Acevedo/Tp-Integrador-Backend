import { Controller, Get } from '@nestjs/common';
import { PropiedadService} from './propiedad.service';
import { Propiedad } from './propiedad.interface';

@Controller('propiedad')
export class PropiedadController {

    constructor(private readonly PropiedadService: PropiedadService){}

    @Get()
    getPropiedades(): Promise <Propiedad[]>{
        return this.PropiedadService.getPropiedades();
    }
}


