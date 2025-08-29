import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly weatherService: WeatherService) { }

    @Get('prediction/:ccaa')
    async getTodayPrediction(@Param('ccaa') ccaa: string) {
        return this.weatherService.getPredictionByCCAA(ccaa);
    }

}
