
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Category } from "../schemas/book.schema"

export class createBookDto {
    @IsNotEmpty()
    @IsString()
    readonly title:string
    
    @IsNotEmpty()
    @IsString()
    readonly description:string

    @IsNotEmpty()
    @IsNumber()
    readonly price:number

    //incase of enum 
    @IsNotEmpty()
    @IsEnum(Category,{message:'Please Enter a valid category'})
    readonly category:Category

    @IsNotEmpty()
    @IsString()
    readonly author:string

    
}