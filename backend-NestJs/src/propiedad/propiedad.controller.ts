import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException, BadRequestException, ValidationPipe, UsePipes } from '@nestjs/common';
import { PropiedadService } from './propiedad.service';
import { PropiedadDto } from './DTOsPropiedad/propiedad.dto';
import { Response } from 'express';
import { Propiedad_Id_Dto } from './DTOsPropiedad/propiedad_id.dto';



@Controller('propiedad')
export class PropiedadController {

  constructor(private readonly PropiedadService: PropiedadService) { }

  @Get()
  async getPropiedades(@Res() res: Response): Promise<Response<Propiedad_Id_Dto[]>> {
    try {
      
      const serviceResponse: Propiedad_Id_Dto[] = await this.PropiedadService.getPropiedades();

      return res.status(HttpStatus.OK).send(serviceResponse)

    } catch (error) {
      throw new NotFoundException("Not found")
    }
  }



  @Get("/:id")
  async getPropiedadById(@Res() res: Response, @Param("id") id: string): Promise<Response<Propiedad_Id_Dto>> {

    try {
      const serviceResponse: Propiedad_Id_Dto = await this.PropiedadService.getPropiedadById(id);

      return res.status(HttpStatus.OK).send(serviceResponse)

    } catch (error) {
      throw new NotFoundException("Not found")
    }
  }


  @Post()
  // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
  @UsePipes(new ValidationPipe({ transform: true }))
  async postPropiedad(@Res() res: Response, @Body() propiedad: PropiedadDto): Promise<Response<{ message: string, data: Propiedad_Id_Dto, success: boolean, code: HttpStatus }>> {

    try {

      const serviceResponse: Propiedad_Id_Dto = await this.PropiedadService.postPropiedad(propiedad)

      return res.status(HttpStatus.CREATED).send({ message: "Created", data: serviceResponse, success: true, code: HttpStatus.CREATED })

    } catch (error) {
      throw new BadRequestException("Propiedad creation failed")
    }

  }



  @Delete(":id")
  async deletepropiedadById(@Res() res: Response, @Param('id') id: string): Promise<Response<{ message: string, success: boolean, code: HttpStatus }>> {
    try {

      const serviceResponse:{success: boolean, message: string} = await this.PropiedadService.deletePropiedadById(id);

      return res.status(HttpStatus.OK).send({ message: serviceResponse.message, success: serviceResponse.success, code: HttpStatus.OK })

    } catch (error) {
      throw new NotFoundException("Delete failed")
    }
  }



  @Put(':id')
  // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
  @UsePipes(new ValidationPipe({ transform: true }))

  async updateTrackById(@Res() res: Response, @Param('id') id: string, @Body() body: PropiedadDto): Promise<Response<{ message: string, success: boolean, code: HttpStatus, data: Propiedad_Id_Dto}>> {

    try {

      const serviceResponse:{success: boolean, message: string, data: Propiedad_Id_Dto} = await this.PropiedadService.updateTrackById(id, body);

      return res.status(HttpStatus.OK).send({ message: serviceResponse.message, success: serviceResponse.success, code: HttpStatus.OK, data: serviceResponse.data })

    } catch (error) {
      throw new NotFoundException("Update failed")
    }

  }



}


