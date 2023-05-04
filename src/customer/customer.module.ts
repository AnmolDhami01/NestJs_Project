import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { LoggerMiddleware } from '../core/middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './schemas/customer.schema';
import { DatabaseModule } from 'src/database/database.module';
import { CustomController } from './controllers/customer.controller';
import { CustomerService } from './Services/Customer.service';
import { customerProviders } from './schemas/customer.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomController],
  providers: [CustomerService, ...customerProviders],
  exports: [CustomerService], // NOw WE CAN USE THIS IN OTHER Module
})
export class CustomerModule {}
