import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AppController {
  @Get('ping')
  ping() {
    return { message: 'pong from API Gateway (simulado)' };
  }
}
