import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { Request, Response } from 'express';
import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import { AuthGaurd } from '../core/gaurd';
import { LoggerInterceptor } from '../core/Interceptor';
import { TaskService } from './task-service';
import Task from './dto/task';

@Controller('/task/v1/')
@UseGuards(AuthGaurd)
@UseInterceptors(LoggerInterceptor)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('getAllTask')
  getAllTask(): Promise<ResponseWrapper> {
    return this.taskService.getAllTask();
  }

  @Get('getTaskById')
  getTaskById(@Query('id') id: number): Promise<ResponseWrapper> {
    return this.taskService.getTaskById(id);
  }

  @Post('addTask')
  @UsePipes(new ValidationPipe())
  addTask(@Body() task: Task): Promise<ResponseWrapper> {
    return this.taskService.addTask(task);
  }
}
