import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('weather')
export class WeatherController {
  private readonly weatherServiceUrl =
    process.env.WEATHER_SERVICE_URL || 'http://localhost:3003/weather';

  @Get('prediction/:ccaa')
  async getTodayPrediction(@Param('ccaa') ccaa: string) {
    try {
      const { data } = await axios.get(`${this.weatherServiceUrl}/prediction/${ccaa}`);
      return data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching weather prediction',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
