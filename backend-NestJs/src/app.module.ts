import { Module } from '@nestjs/common';
import { PropiedadModule } from './propiedad/propiedad.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [PropiedadModule, UsuarioModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
