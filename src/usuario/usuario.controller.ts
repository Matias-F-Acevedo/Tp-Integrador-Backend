import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.interface';

@Controller('usuario')
export class UsuarioController {
    constructor (private readonly UsuarioService: UsuarioService ){}

//     @Get()
//     getUsuarios(): Promise <Usuario[]>{
//         return this.UsuarioService.getUsuarios();
//     }

//     @Get("/:id")
//     getUsuarioById(@Param("id") id:string): Promise <Usuario>{
//         return this.UsuarioService.getUsuarioById(id);
//     }

//     @Post()
//     postUsuario(@Body() usuario: any){
//     const nuevoUsuario = this.UsuarioService.postUsuario(usuario)
//     return {
//     message: 'Data saved',
//     usuario: usuario,
//     success: true,
//     code: 201,
//     data: nuevoUsuario
//   }
//   }

}
