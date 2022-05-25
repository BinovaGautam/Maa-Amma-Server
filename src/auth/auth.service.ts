import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService{
    constructor(
        private prisma:PrismaService,
        private jwtService:JwtService,
        private config:ConfigService
    ){}
       

    async login(dto: AuthDto){
       //find if user exists
       const user = await this.prisma.user.findFirst({
              where : {
                    email : dto.email
              }
         });
        // if user exists   
        if(user){
            //check password
            const valid = await argon.verify(user.token, dto.password);
            //if password is valid
            if(valid){
                // return {
                //     userId : user.id,
                //     email : user.email,
                //     phone : user.phone,
                // }
                return this.signToken(user)
            }else{
                return {message : "Invalid Password"}
            }
        }else{
           return {message : "User not found"}
        }
    }

   async register(dto: AuthDto){
        // generate password hash
        const hash = await argon.hash(dto.password);
        // save user to database
        const user = await this.prisma.user.create({
            data : {
                email : dto.email,
                token : hash,
                phone : dto.phone,
                
            },
            select : {
                id : true , 
                email : true,
                phone : true,
            }
        })
        // return user
        
        return user;
    }

    async signToken(user: User) : Promise<string> {
        let payload = {sub : user.id , email : user.email , phone : user.phone};
        
        return this.jwtService.signAsync(payload,{
            expiresIn : '15m',
            secret : this.config.get('JWT_SECRET')
        });
       
    }
}