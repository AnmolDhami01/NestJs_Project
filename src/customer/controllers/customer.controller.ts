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
import { AuthGaurd } from '../../core/gaurd';
import { LoggerInterceptor } from '../../core/Interceptor';
import { CustomerService } from '../Services/Customer.service';
import { Customer } from '../dto/CustomerDto';
import { Customer as Customer1 } from '../../interface/customerInterface';

@Controller('/customer/v1/')
@UseGuards(AuthGaurd)
@UseInterceptors(LoggerInterceptor)
export class CustomController {
  constructor(private readonly customerService: CustomerService) {}

  @Get('getAllCustomers')
  getAllCustomers(): Promise<ResponseWrapper> {
    return this.customerService.getAllCustomers();
  }

  @Get('getCustomerById')
  getCustomerById(@Query('id') id: string): Promise<ResponseWrapper> {
    return this.customerService.getCustomerById(id);
  }

  @Post('addCustomer')
  addCustomer(@Body() customer: Customer): Promise<ResponseWrapper> {
    return this.customerService.addCustomer(customer);
  }
}
