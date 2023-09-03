import { Controller, Get, Param, Post, Body, Res, NotFoundException,HttpStatus,BadRequestException, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Response } from 'express';

@Controller('usuario')
export class UsuarioController {
    constructor (private readonly UsuarioService: UsuarioService ){}

    @Get()
    async getUsuarios(@Res() res: Response){
        try {
            const serviceResponse = await this.UsuarioService.getUsuarios();
            return res.status(HttpStatus.OK).send(serviceResponse)   
        }catch(error){
        throw new NotFoundException("Not found")  
        }
    }

    @Get("/:id")
    async getUsuarioById(@Res() res: Response, @Param("id") id:string){
        try{
            const serviceResponse = await this.UsuarioService.getUsuarioById(id);
            return res.status(HttpStatus.OK).send(serviceResponse)
        }catch(error){
            throw new NotFoundException("Not found")
        }
        
    }

    @Post()
    async postUsuario(@Res() res: Response, @Body() usuario: any){

        try{
            const serviceResponse = await this.UsuarioService.postUsuario(usuario)
            return res.status(HttpStatus.CREATED).send({ message: "Created", data: serviceResponse, success: true, code: HttpStatus.CREATED })
        }catch(error){
            throw new BadRequestException("Propiedad creation failed")
        }
  }



  @Delete(":id")
  async deleteUserById(@Res() res: Response, @Param('id') id: string) {
    try {
      const serviceResponse = await this.UsuarioService.deleteUserById(id);
      return res.status(HttpStatus.OK).send({ message: serviceResponse.message, success: serviceResponse.success, code: HttpStatus.OK })
    } catch (error) {
      throw new NotFoundException("Delete failed")
    }
  }

  @Put(':id')
  async updateUserById(@Res() res: Response, @Param('id') id: string, @Body() body: any) {
    try {
      const serviceResponse = await this.UsuarioService.updateUserById(id, body);
      return res.status(HttpStatus.OK).send({ message: serviceResponse.message, success: serviceResponse.success, code: HttpStatus.OK, data: serviceResponse.data})
    } catch (error) {
      throw new NotFoundException("Update failed")
    }

  }

  }

