import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropiedadController } from './propiedad/propiedad.controller';
import { PropiedadService } from './propiedad/propiedad.service';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';

@Module({
  imports: [],
  controllers: [PropiedadController, UsuarioController],
  providers: [AppService, PropiedadService, UsuarioService],
})
export class AppModule {}
