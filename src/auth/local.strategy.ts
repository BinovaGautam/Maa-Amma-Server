import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(dto : AuthDto): Promise<any> {
        const user = await this.authService.login(dto);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}