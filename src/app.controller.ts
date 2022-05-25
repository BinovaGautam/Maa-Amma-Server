import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'Not Hello world This time'
  }

  @Get('/test')
  getTest(): string {
    return 'Test'
  }
  

}
