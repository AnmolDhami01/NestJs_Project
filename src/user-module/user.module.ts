import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleware } from '../core/middleware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // NOw WE CAN USE THIS IN OTHER Module
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/user/v1/');
  }
}
{
}
