import { Category } from "../schemas/book.schema"

export class createBookDto {
    readonly title:string
    readonly description:string
    readonly price:number
    readonly category:Category
    readonly author:string
    
}