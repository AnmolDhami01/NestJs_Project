import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TaskController } from './task-controller';
import { TaskService } from './task-service';
import { LoggerMiddleware } from '../core/middleware';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService], // NOw WE CAN USE THIS IN OTHER Module
})
export class TaskModule {}
