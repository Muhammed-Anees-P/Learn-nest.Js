import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from 'src/book/schemas/user.schema';
import * as bcrypt from 'bcryptjs'
import { signupDto } from 'src/book/dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { loginDto } from 'src/book/dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(user.name)
        private userModel: Model<user>,
        private jwtService: JwtService
    ){}

    async sighnup(signupDto:signupDto): Promise <{token:string}> {
        const {name, email, password} = signupDto
        
        let hashedPassword = await bcrypt.hash(password, 10)

        const user = await  this.userModel.create ({
            name,
            email,
            password:hashedPassword
        })

        const token = this.jwtService.sign({id: user._id })
        return {token}
    
    }

    async login(loginDto:loginDto) : Promise<{token:string}>{
        const {email, password} = loginDto
        const userExist = await this.userModel.findOne({email})

        if(!userExist){
            throw new UnauthorizedException('Invalid email or password')
        }

        const isMatchPassoword = await bcrypt.compare(password, userExist.password)

        if(!isMatchPassoword){
            throw new UnauthorizedException(" Invalid email or passoword")
        }

        const token = this.jwtService.sign({id:userExist._id})
        return {token}
     
    }

}    
