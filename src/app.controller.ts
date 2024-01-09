import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/aiya')
  getAiya(): string {
    return this.appService.getAiya();
  }

  @Get('/lisa')
  getLisa(): string {
    return this.appService.getLisa();
  }

  @Get('*')
  getOut(): string {
    return this.appService.getOut();
  }
}
