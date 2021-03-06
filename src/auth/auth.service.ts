import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto , LoginDto } from "./dto";
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

    async validateUser(payload:{email : string}): Promise<any> {
        const user = await this.prisma.user.findFirst({
            where: {
                email: payload.email
            }
        });
        if(!user) {
            return null;
        }
        return user;
    }
       

    async login(dto: LoginDto){
       //find if user exists
       const user = await this.validateUser({email : dto.email});
       console.log('USER LOGIN DTO ', dto);
        // if user exists   
        if(user){
            //check password
            const valid = await argon.verify(user.token, "Binova@2022");
            //if password is valid
            if(valid){
                return {
                    action : 'login',
                    userId : user.id,
                    email : user.email,
                    phone : user.phone,
                    accessToken : await this.signToken(user)
                }
                
            }else{
                return {message : "Invalid Password"}
            }
        }else{
           return {message : "User not found"}
        }
    }

   async register(dto: AuthDto){
        // generate password hash
        const isUser = await this.validateUser({ email: dto.email });
        if(isUser){
            return {message : "User already exists"}
        }
        const hash = await argon.hash(dto.password);
        // save user to database
        const user = await this.prisma.user.create({
            data : {
                email : dto.email,
                token : dto.password,
                phone : dto.phone,
                
            }
        })
        
        // return this.login({email : dto.email, password : dto.password});
        
       return {
           aciton : 'register',
           userId: user.id,
           email: user.email,
        //    phone: user.phone,
           accessToken: await this.signToken(user)
       }
    }

    async signToken(user: User) : Promise<string> {
        let payload = {sub : user.id , email : user.email , phone : user.phone};
        
        return this.jwtService.signAsync(payload,{
            expiresIn : '1w',
            secret : this.config.get('JWT_SECRET')
        });
       
    }
}