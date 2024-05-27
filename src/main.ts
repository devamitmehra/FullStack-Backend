import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


// dotenv.config({ path: process.env.NODE_ENV === 'production' ? './production.env' : './development.env' });

async function bootstrap() {
  console.log(process.env.ALLOWORIGIN)
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.ALLOWORIGIN, // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(process.env.PORT || 300);
  console.log(`Backend is running on http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();

