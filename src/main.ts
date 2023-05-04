import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './user-module/filter';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // convert JSON string to object
    }),
  );
  app.setGlobalPrefix('nest'); // set global prefix before routes
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  SwaggerModule.setup('nest', app, createDocument(app));
  await app.listen(8000);
}
bootstrap();
