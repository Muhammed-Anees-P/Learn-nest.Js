import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class signupDto {
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsEmail({},{message:'Please enter a valid email'})
    email:string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password:string
}