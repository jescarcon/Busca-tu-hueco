import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Controller('auth')
export class AuthController {

  private readonly authServiceUrl = process.env.AUTH_SERVICE_URL || 'http://localhost:3001/auth';

  @Post('register')
  async register(@Body() registerDto: unknown) {
    try {
      const response = await axios.post(`${this.authServiceUrl}/register`, registerDto);
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error en auth service (register)',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  async login(@Body() loginDto: unknown) {
    try {
      const response = await axios.post(`${this.authServiceUrl}/login`, loginDto);
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error en auth service (login)',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
