import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";



@Schema({
    timestamps:true,
})

export class user extends Document {
    @Prop({required:true})
    name:string

    @Prop({unique:true,required:true})
    email:string

    @Prop({min:6, required:true})
    password:string
}

export const userSchema = SchemaFactory.createForClass(user)