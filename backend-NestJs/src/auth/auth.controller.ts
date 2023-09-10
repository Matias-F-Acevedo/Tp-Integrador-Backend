import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import {Post, Body, Res, HttpStatus, HttpCode,ValidationPipe, UsePipes, UnauthorizedException} from '@nestjs/common';
import { LoginDto } from './login.dto';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
    constructor (private authService:AuthService){}

    @Post("login")
    // habilita la transformacion del objeto al tipo del DTO antes de usarlo en la logica.
     @UsePipes(new ValidationPipe({ transform: true }))

    async login(@Res() res: Response ,@Body() loginDto: LoginDto):Promise<Response<{message: string, data:{access_token:string}, success: boolean, code: HttpStatus }>>{
        try{
            const serviceResponse = await this.authService.login(loginDto.email, loginDto.contraseña);
            return res.status(HttpStatus.CREATED).send({ message: "Authorized User", data: serviceResponse, success: true, code: HttpStatus.OK })

        } catch (error) {
            throw new UnauthorizedException("Unauthorized User")
          }

    }

}

