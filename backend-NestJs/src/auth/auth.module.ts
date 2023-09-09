import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[UsuarioModule,JwtModule.register({
    global:true,
    secret: jwtConstants.secret,
    signOptions:{expiresIn: '1h'}
  }) ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
