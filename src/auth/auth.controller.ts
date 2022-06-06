import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto , LoginDto } from "./dto";

@Controller ('auth')
export class AuthController {
    constructor(private authservice:AuthService) { 

    }

    @Post('login')
    login(
        @Body () dto:LoginDto
    ) {
        console.log({dto});
        return this.authservice.login(dto);
    }

    @Post('register')
    register(@Body () dto:AuthDto) {
        return this.authservice.register(dto);
    }

}