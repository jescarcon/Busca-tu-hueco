// apps/weather/src/app.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';

@Module({
  imports: [ HttpModule ],
  providers: [ WeatherService ],
  controllers: [ WeatherController ],
  exports:[ WeatherService ]
})
export class AppModule {}
