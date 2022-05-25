import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.startegy';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        PrismaModule ,
         PassportModule,
         JwtModule.register({})
        ],
    controllers : [AuthController],
    providers : [AuthService,LocalStrategy,JwtStrategy,ConfigService],
})
export class AuthModule {}
