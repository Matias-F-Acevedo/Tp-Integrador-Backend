import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropiedadesController } from './propiedades/propiedades.controller';
import { PropiedadesService } from './propiedades/propiedades.service';

@Module({
  imports: [],
  controllers: [AppController, PropiedadesController],
  providers: [AppService, PropiedadesService],
})
export class AppModule {}
