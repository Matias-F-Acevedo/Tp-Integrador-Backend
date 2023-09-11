import { Controller, Get, Param, Post, Body, Res, NotFoundException, HttpStatus, BadRequestException, Delete, Put, ValidationPipe, UsePipes,UnauthorizedException,UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Response } from 'express';
import { UsuarioDto } from './usuario.dto';
import { Usuario } from 'src/interface/usuario.interface';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly UsuarioService: UsuarioService) { }

  @UseGuards(AuthGuard)
  @Get()
  async get(@Res() res: Response): Promise<Response<Usuario[]>> {
    try {
      const serviceResponse: Usuario[] = await this.UsuarioService.get();
      return res.status(HttpStatus.OK).send(serviceResponse)
    } catch (error) {
      throw new NotFoundException("Not found")
    }
  }

  @UseGuards(AuthGuard)
  @Get("/:id")
  async getById(@Res() res: Response, @Param("id") id: string): Promise<Response<Usuario>> {

    try {
      const serviceResponse: Usuario = await this.UsuarioService.getById(id);
      return res.status(HttpStatus.OK).send(serviceResponse)
    } catch (error) {
      throw new UnauthorizedException("Not authorized")
    }

  }

  @Post()
  // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
  @UsePipes(new ValidationPipe({ transform: true }))
  async post(@Res() res: Response, @Body() usuario: UsuarioDto): Promise<Response<{message: string, data:Usuario, success: boolean, code: HttpStatus }>> {

    try {
      const serviceResponse:Usuario = await this.UsuarioService.post(usuario)
      return res.status(HttpStatus.CREATED).send({ message: "Created", data: serviceResponse, success: true, code: HttpStatus.CREATED })
    } catch (error) {
      throw new BadRequestException("User creation failed")
    }
  }

  @UseGuards(AuthGuard)
  @Delete(":id")
  async deleteById(@Res() res: Response, @Param('id') id: string): Promise<Response<{ message: string, success: boolean, code: HttpStatus }>> {
    try {
      const serviceResponse:{success:boolean} = await this.UsuarioService.deleteById(id);
      return res.status(HttpStatus.OK).send({ message: `User with id: {${id}} was deleted`, success: serviceResponse.success, code: HttpStatus.OK })
    } catch (error) {
      throw new NotFoundException("Delete failed")
    }
  }
  @UseGuards(AuthGuard)
  @Put(':id')
  // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
  @UsePipes(new ValidationPipe({ transform: true }))
  async updateById(@Res() res: Response, @Param('id') id: string, @Body() body: UsuarioDto): Promise<Response<{ message: string, success: boolean, code: HttpStatus, data:Usuario }>> {
    
    try {
      const serviceResponse: { success: boolean, data:{} } = await this.UsuarioService.updateById(id, body);
      return res.status(HttpStatus.OK).send({message: `User edited`, success: serviceResponse.success, code: HttpStatus.OK, data: serviceResponse.data})
    } catch (error) {
      throw new NotFoundException("Update failed")
    }
  }

  
}

