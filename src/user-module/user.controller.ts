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
import { UserService } from './user.service';
import { User } from './interface/user';

import { UserDto } from './dto/user.dto';
import { Request, Response } from 'express';
import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import { AuthGaurd } from '../core/gaurd';
import { LoggerInterceptor } from '../core/Interceptor';

@Controller('/user/v1/')
@UseGuards(AuthGaurd)
@UseInterceptors(LoggerInterceptor)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('helloWorld')
  getHello(@Req() req: Request, @Res() res: Response): Response {
    return this.userService.getHello(req, res);
  }

  @Get('getUsers')
  async getUsers(): Promise<ResponseWrapper> {
    return this.userService.getUsers();
  }

  @Post('addUser')
  @UsePipes(new ValidationPipe())
  addUser(
    @Body() user: UserDto,
    // @Query('sort') sort: Boolean,
    // @Param('sort') sort1: String,
    // @Headers('token') token: String,
    @Req() req: Request,
    @Res() res: Response,
  ): User {
    return this.userService.addUser(user, req, res);
  }

  @Post('deleteUser/:email')
  deleteUser(@Param() email: string): User {
    console.log({ email });
    return this.userService.deleteUser(email);
  }
}
