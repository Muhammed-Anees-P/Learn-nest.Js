import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { Strategy , ExtractJwt} from "passport-jwt";
import { user } from "src/book/schemas/user.schema";



@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectModel(user.name)
        private userModel: Model <user>
    ){
        super({
             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
             secretOrKey: process.env.JWT_SECRET
        })
    }
    async validate(payload){
        const {id} = payload;
        const user = await this.userModel.findById(id)
        
    }
}