import { Controller, Get } from '@nestjs/common';
import { PropiedadesService} from './propiedades.service';
import { Propiedades } from './propiedades.interface';

@Controller('propiedades')
export class PropiedadesController {

    constructor(private readonly PropiedadesService: Propiedades){}

    @Get()
    getPropiedades(): Promise <Propiedades[]>{
        return this.PropiedadesService.getPropiedades();
    }
}
