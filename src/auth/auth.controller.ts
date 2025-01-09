import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signupDto } from 'src/book/dto/signup.dto';
import { loginDto } from 'src/book/dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}
    @Post('signup')
    signUp(@Body() signupDto:signupDto) : Promise <{token:string}>{
        return this.authService.sighnup(signupDto)
    }

    @Get('login')
    login (@Body() loginDto:loginDto) : Promise <{token:string}>{
        return this.authService.login(loginDto)

    }
}
