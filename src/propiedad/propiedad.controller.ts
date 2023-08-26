import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException, BadRequestException } from '@nestjs/common';
import { PropiedadService } from './propiedad.service';
import { Propiedad } from './propiedad.interface';
import { Response } from 'express';
@Controller('propiedad')
export class PropiedadController {

  constructor(private readonly PropiedadService: PropiedadService) { }

  @Get()
  async getPropiedades(@Res() res: Response) {
    try {
      const serviceResponse = await this.PropiedadService.getPropiedades();
      return res.status(HttpStatus.OK).send(serviceResponse)
    } catch (error) {
      throw new NotFoundException("Not found")
    }
  }



  @Get("/:id")
  async getPropiedadById(@Res() res: Response, @Param("id") id: string) {
    try {
      const serviceResponse = await this.PropiedadService.getPropiedadById(id);
      return res.status(HttpStatus.OK).send(serviceResponse)
    } catch (error) {
      throw new NotFoundException("Not found")
    }
  }


  @Post()
  async postPropiedad(@Res() res: Response, @Body() propiedad: any) {
    try {

      const serviceResponse = await this.PropiedadService.postPropiedad(propiedad)
      return res.status(HttpStatus.CREATED).send({ message: "Created", data: serviceResponse, success: true, code: HttpStatus.CREATED })

    } catch (error) {
      throw new BadRequestException("Propiedad creation failed")
    }

  }



  @Delete(":id")
  async deletepropiedadById(@Res() res: Response, @Param('id') id: string) {
    try {
      const serviceResponse = await this.PropiedadService.deletePropiedadById(id);
      return res.status(HttpStatus.OK).send({ message: serviceResponse.message, success: serviceResponse.success, code: HttpStatus.OK })
    } catch (error) {
      throw new NotFoundException("Delete failed")
    }
  }



  @Put(':id')
  async updateTrackById(@Res() res: Response, @Param('id') id: string, @Body() body: any) {
    try {
      const serviceResponse = await this.PropiedadService.updateTrackById(id, body);
      return res.status(HttpStatus.OK).send({ message: serviceResponse.message, success: serviceResponse.success, code: HttpStatus.OK, data: serviceResponse.data})
    } catch (error) {
      throw new NotFoundException("Update failed")
    }

  }



}


