import { Category } from "../schemas/book.schema"

export class updateBookDto {
    readonly title:string
    readonly description:string
    readonly price:number
    readonly category:Category
    readonly author:string
    
}