import { Controller, Get } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.interface';

@Controller('usuario')
export class UsuarioController {
    constructor (private readonly UsuarioService: UsuarioService ){}

    @Get()
    getUsuarios(): Promise <Usuario[]>{
        return this.UsuarioService.getUsuarios();
    }
}
