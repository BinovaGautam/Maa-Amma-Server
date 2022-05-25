import { Controller, Get } from '@nestjs/common';
import {User} from '@prisma/client';

@Controller('user')
export class UserController {
    constructor() {}

    @Get('test')
    test() {
        return 'hello user world';
    }
}
