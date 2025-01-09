import { IsEnum, IsOptional, IsString } from "class-validator"
import { Category } from "../schemas/book.schema"

export class updateBookDto {
    @IsString()
    @IsOptional()
    readonly title:string

    @IsString()
    @IsOptional()
    readonly description:string

    @IsString()
    @IsOptional()
    readonly price:number

    @IsString()
    @IsOptional()
    @IsEnum(Category, {message:"Please enter a valid category"})
    readonly category:Category

    @IsString()
    @IsOptional()
    readonly author:string
    
}