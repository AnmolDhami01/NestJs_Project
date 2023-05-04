import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user-module/user.module';
import { TaskModule } from './task-controller/task-module';
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './database/database.module';
import { userSqlModule } from './userSql-module/userSql.module';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    TaskModule,
    CustomerModule,
    userSqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
