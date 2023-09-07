import { Controller, Get, Param, Post, Body, Res, NotFoundException, HttpStatus, BadRequestException, Delete, Put, ValidationPipe, UsePipes } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Response } from 'express';
import { Usuario_id_Dto } from './DTOsUsuario/usuario_id.dto';
import { UsuarioDto } from './DTOsUsuario/usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly UsuarioService: UsuarioService) { }

  @Get()
  async get(@Res() res: Response): Promise<Response<Usuario_id_Dto[]>> {
    try {
      const serviceResponse: Usuario_id_Dto[] = await this.UsuarioService.get();
      return res.status(HttpStatus.OK).send(serviceResponse)
    } catch (error) {
      throw new NotFoundException("Not found")
    }
  }

  @Get("/:id")
  async getById(@Res() res: Response, @Param("id") id: string): Promise<Response<Usuario_id_Dto>> {

    try {
      const serviceResponse: Usuario_id_Dto = await this.UsuarioService.getById(id);
      return res.status(HttpStatus.OK).send(serviceResponse)
    } catch (error) {
      throw new NotFoundException("Not found")
    }

  }

  @Post()
  // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
  @UsePipes(new ValidationPipe({ transform: true }))
  async post(@Res() res: Response, @Body() usuario: UsuarioDto): Promise<Response<{message: string, data:Usuario_id_Dto, success: boolean, code: HttpStatus }>> {

    try {
      const serviceResponse:Usuario_id_Dto = await this.UsuarioService.post(usuario)
      return res.status(HttpStatus.CREATED).send({ message: "Created", data: serviceResponse, success: true, code: HttpStatus.CREATED })
    } catch (error) {
      throw new BadRequestException("User creation failed")
    }
  }

  
  @Delete(":id")
  async deleteById(@Res() res: Response, @Param('id') id: string): Promise<Response<{ message: string, success: boolean, code: HttpStatus }>> {
    try {
      const serviceResponse:{success:boolean} = await this.UsuarioService.deleteById(id);
      return res.status(HttpStatus.OK).send({ message: `User with id: {${id}} was deleted`, success: serviceResponse.success, code: HttpStatus.OK })
    } catch (error) {
      throw new NotFoundException("Delete failed")
    }
  }

  @Put(':id')
  // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateById(@Res() res: Response, @Param('id') id: string, @Body() body: UsuarioDto): Promise<Response<{ message: string, success: boolean, code: HttpStatus, data:Usuario_id_Dto }>> {
    
    try {
      const serviceResponse: { success: boolean, data:Usuario_id_Dto } = await this.UsuarioService.updateById(id, body);
      return res.status(HttpStatus.OK).send({message: `User edited`, success: serviceResponse.success, code: HttpStatus.OK, data: serviceResponse.data})
    } catch (error) {
      throw new NotFoundException("Update failed")
    }
  }
}

