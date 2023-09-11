import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException, BadRequestException, ValidationPipe, UsePipes,UseGuards, Query } from '@nestjs/common';
import { PropiedadService } from './propiedad.service';
import { PropiedadDto } from './propiedad.dto';
import { Response } from 'express';
import { Propiedad } from 'src/interface/propiedad.interface';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('propiedad')
export class PropiedadController {

  constructor(private readonly PropiedadService: PropiedadService) { }

  @Get()
  async get(@Res() res: Response, @Query('dueño') dueñoPropiedad?:string): Promise<Response<Propiedad[]>> {


    try {
      if(!dueñoPropiedad){
      const serviceResponse: Propiedad[] = await this.PropiedadService.get();
      return res.status(HttpStatus.OK).send(serviceResponse)
      }
      
      const serviceResponse: Propiedad[] = await this.PropiedadService.getByDueño(dueñoPropiedad);
      return res.status(HttpStatus.OK).send(serviceResponse)
      
    } catch (error) {
      throw new NotFoundException("Not found")
    }
  }



  @Get("/:id")
  async getById(@Res() res: Response, @Param("id") id: string): Promise<Response<Propiedad>> {

    try {
      const serviceResponse: Propiedad = await this.PropiedadService.getById(id);

      return res.status(HttpStatus.OK).send(serviceResponse)

    } catch (error) {
      throw new NotFoundException("Not found")
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
  @UsePipes(new ValidationPipe({ transform: true }))
  async post(@Res() res: Response, @Body() propiedad: PropiedadDto): Promise<Response<{ message: string, data: Propiedad, success: boolean, code: HttpStatus }>> {

    try {

      const serviceResponse: Propiedad = await this.PropiedadService.post(propiedad)

      return res.status(HttpStatus.CREATED).send({ message: "Created", data: serviceResponse, success: true, code: HttpStatus.CREATED })

    } catch (error) {
      throw new BadRequestException("Propiedad creation failed")
    }

  }


  @UseGuards(AuthGuard)
  @Delete(":id")
  async deleteById(@Res() res: Response, @Param('id') id: string): Promise<Response<{ message: string, success: boolean, code: HttpStatus }>> {
    try {

      const serviceResponse:{success: boolean} = await this.PropiedadService.deleteById(id);

      return res.status(HttpStatus.OK).send({message:`Propiedad with id: {${id}} was deleted`, success: serviceResponse.success, code: HttpStatus.OK })

    } catch (error) {
      throw new NotFoundException("Delete failed")
    }
  }


  @UseGuards(AuthGuard)
  @Put(':id')
  // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
  @UsePipes(new ValidationPipe({ transform: true }))

  async updateById(@Res() res: Response, @Param('id') id: string, @Body() body: PropiedadDto): Promise<Response<{ message: string, success: boolean, code: HttpStatus, data: Propiedad}>> {

    try {

      const serviceResponse:{success: boolean, data: Propiedad} = await this.PropiedadService.updateById(id, body);

      return res.status(HttpStatus.OK).send({message: `Propiedad edited`, success: serviceResponse.success, code: HttpStatus.OK, data: serviceResponse.data})

    } catch (error) {
      throw new NotFoundException("Update failed")
    }

  }

}


