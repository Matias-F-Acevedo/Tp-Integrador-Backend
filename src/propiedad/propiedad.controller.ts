import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, BadRequestException, Param, Patch, Post, Put, Res } from '@nestjs/common';

import { PropiedadService } from './propiedad.service';
import { Propiedad } from './propiedad.interface';

import db from 'src/firebase/config';
import { DocumentData } from 'firebase/firestore/lite';
import { Response } from 'express';
import { error } from 'console';


@Controller('propiedad')
export class PropiedadController {

    constructor(private readonly PropiedadService: PropiedadService) { }

    @Get()
    async getPropiedades(@Res() res: Response) {
        try {
            const serviceResponse = await this.PropiedadService.getPropiedades(db);
            return res.status(HttpStatus.OK).json(serviceResponse)
        } catch (error) {
            throw new NotFoundException("Data not found")
        }

    }



    @Get("/:id")
    async getPropiedadById(@Res() res: Response, @Param("id") id: string): Promise<DocumentData> {
        try {
            const serviceResponse = await this.PropiedadService.getPropiedadById(db, id);
            return res.status(HttpStatus.OK).json(serviceResponse)
        } catch (error) {
            throw new NotFoundException("Data not found")
        }
    }


    @Post()
    async createPropiedad(@Res() res: Response, @Body() propiedad: any) {
        try{
            const serviceResponse = await this.PropiedadService.createPropiedad(db, propiedad)
            return res.status(HttpStatus.CREATED).send({message:"Created",data:serviceResponse, success:true, code:HttpStatus.CREATED})
        }catch (error){
            throw new BadRequestException("Propiedad creation failed")
        }
        

     
    }


    @Patch("/:id")
    patchPropiedad(@Param("id") id: string, @Body() body: any,) {

        this.PropiedadService.patchPropiedad(db, body, id)

    }
    @Put("/:id")
    putPropiedad(@Param("id") id: string, @Body() body: any,) {

        this.PropiedadService.putPropiedad(db, body, id)

    }
    @Delete("/:id")
    deletePropiedad(@Param("id") id: string) {
        return this.PropiedadService.deletePropiedad(db, id)
    }


}


