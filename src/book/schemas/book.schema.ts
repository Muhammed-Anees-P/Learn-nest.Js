import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { user } from "./user.schema";
import mongoose from "mongoose";


export enum Category{
    ADVENTURE = 'Adventure',
    CLASSIC = 'Classic',
    CRIME = 'Crime',
    FANTACY = 'Fantacy'

}

@Schema({
    timestamps:true
})

export class Book{
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'user'})
    user:user

}

export const BookSchema = SchemaFactory.createForClass(Book)