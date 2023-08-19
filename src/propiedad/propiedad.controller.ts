import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PropiedadService} from './propiedad.service';
import { Propiedad } from './propiedad.interface';

@Controller('propiedad')
export class PropiedadController {

    constructor(private readonly PropiedadService: PropiedadService){}

    @Get()
    getPropiedades(): Promise <Propiedad[]>{
        return this.PropiedadService.getPropiedades();
    }
    @Get("/:id")
    getPropiedadById(@Param("id") id:string): Promise <Propiedad>{
        return this.PropiedadService.getPropiedadById(id);
    }

    @Post()
    postPropiedad(@Body() propiedad: any){
    const nuevaPropiedad = this.PropiedadService.postPropiedad(propiedad)
    return {
    message: 'Data saved',
    propiedad: propiedad,
    success: true,
    code: 201,
    data: nuevaPropiedad
  }
  }
    
}


