import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { PropiedadService} from './propiedad.service';
import { Propiedad } from './propiedad.interface';


import db from 'src/firebase/config';
import { DocumentData } from 'firebase/firestore/lite';


@Controller('propiedad')
export class PropiedadController {

    constructor(private readonly PropiedadService: PropiedadService){}

    @Get()
    getPropiedades(): Promise <DocumentData[]>{
        return this.PropiedadService.getPropiedades(db);
    }


    @Get("/:id")
    getPropiedadById(@Param("id") id:string): Promise <any>{
        return this.PropiedadService.getPropiedadById(db,id);
    }

    
    @Post()
    postPropiedad(@Body() propiedad: any){
    const nuevaPropiedad = this.PropiedadService.postPropiedad(db,propiedad)
    return {
    message: 'Data saved',
    propiedad: propiedad,
    success: true,
    code: 201,
    data: nuevaPropiedad
  }
  }


  @Patch("/:id")
    patchPropiedad(@Param("id") id:string , @Body() body: any, ){

        this.PropiedadService.patchPropiedad(db,body,id)
       
  }
  @Put("/:id")
    putPropiedad(@Param("id") id:string , @Body() body: any, ){

        this.PropiedadService.putPropiedad(db,body,id)
       
  }
  @Delete("/:id")
    deletePropiedad(@Param("id") id:string){
        return this.PropiedadService.deletePropiedad(db,id)
    }

    
} 


