import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('products')
export class ProductsController {
    constructor() {}

    @UseGuards(AuthGuard('jwt'))
    @Get('test')
    test() {
        return 'hello user world';
    }
}
