import { Module } from '@nestjs/common';
import { PropiedadModule } from './propiedad/propiedad.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PropiedadModule, UsuarioModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
