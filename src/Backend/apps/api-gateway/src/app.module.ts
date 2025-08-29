import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { WeatherController } from './controllers/weather.controller';

@Module({
  imports: [],
  controllers: [AuthController,WeatherController],
  providers: [],
})
export class AppModule {}
