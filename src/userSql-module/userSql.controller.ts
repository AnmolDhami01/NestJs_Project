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
import { userSqlService } from './userSql.service';

@Controller('/userSql/v1/')
@UseGuards(AuthGaurd)
@UseInterceptors(LoggerInterceptor)
export class userSqlController {
  constructor(private readonly userSqlService: userSqlService) {}

  @Get('getAllPhotos')
  getAllTask(): Promise<ResponseWrapper> {
    return this.userSqlService.getAllPhotos();
  }

  @Get('getPhototById')
  getTaskById(@Query('id') id: number): Promise<ResponseWrapper> {
    return this.userSqlService.getPhotosById(id);
  }
}
