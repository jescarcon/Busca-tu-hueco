import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const base_front_url = process.env.BASE_FRONTEND_URL || 'http://localhost:5173';

  app.enableCors({
    origin: `${base_front_url}`,  //CORS HEADERS
  });
  
  await app.listen(process.env.port ?? 3001);
}
bootstrap();



