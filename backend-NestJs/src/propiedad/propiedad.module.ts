import { Module } from '@nestjs/common';
import { PropiedadController } from './propiedad.controller';
import { PropiedadService } from './propiedad.service';


@Module({
  controllers: [PropiedadController],
   providers: [PropiedadService],
 
 })
 
 export class PropiedadModule{}