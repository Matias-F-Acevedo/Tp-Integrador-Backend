import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, BadRequestException, Param, Patch, Post, Put, Res, ValidationPipe } from '@nestjs/common';

import { PropiedadService } from './propiedad.service';
import { Propiedad } from './propiedad.interface';

import { DocumentData } from 'firebase/firestore/lite';
import { Response } from 'express';


@Controller('propiedad')
export class PropiedadController {

    constructor(private readonly PropiedadService: PropiedadService) { }

    @Get()
    async getPropiedades(@Res() res: Response) {
        try {
            const serviceResponse = await this.PropiedadService.getPropiedades();
            return res.status(HttpStatus.OK).json(serviceResponse)
        } catch (error) {
            throw new NotFoundException("Data not found")
        }
    }



    @Get("/:id")
    async getPropiedadById(@Res() res: Response, @Param("id") id: string): Promise<DocumentData> {
        try {
            const serviceResponse = await this.PropiedadService.getPropiedadById( id);
            return res.status(HttpStatus.OK).json(serviceResponse)
        } catch (error) {
            throw new NotFoundException("Data not found")
        }
    }


    @Post()
    async createPropiedad(@Res() res: Response, @Body() propiedad: any) {
        try {
            const serviceResponse = await this.PropiedadService.createPropiedad(propiedad)
            return res.status(HttpStatus.CREATED).send({ message: "Created", data: serviceResponse, success: true, code: HttpStatus.CREATED })
        } catch (error) {
            throw new BadRequestException("Propiedad creation failed")
        }
    }


    @Patch("/:id")
    async patchPropiedad(@Res() res: Response, @Param("id") id: string, @Body() body: any) {
        try {
            const serviceResponse = await this.PropiedadService.patchPropiedad(body, id)
            return res.status(HttpStatus.OK).send({ message: serviceResponse.message, data: body, success: serviceResponse.success, code: HttpStatus.OK})
        } catch (error) {
            throw new NotFoundException("Update failed")
        }
    }


    @Put("/:id")
    async putPropiedad(@Res() res: Response, @Param("id") id: string, @Body() body: any) {
        try {
            const serviceResponse = await this.PropiedadService.putPropiedad(body, id)
            return res.status(HttpStatus.OK).send({ message: serviceResponse.message, data: body, success: serviceResponse.success, code: HttpStatus.OK})
        } catch (error) {
            throw new NotFoundException("Update failed")
        }
    }


    @Delete("/:id")
    async deletePropiedad(@Res() res: Response, @Param("id") id: string) {
        try {
            const serviceResponse = await this.PropiedadService.deletePropiedad(id)
            return res.status(HttpStatus.OK).send({ message: serviceResponse.message, success: serviceResponse.success, code: HttpStatus.OK })

        } catch (error) {
            throw new NotFoundException("Delete failed")
        }
    }
}


