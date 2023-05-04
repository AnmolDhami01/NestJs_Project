import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { LoggerMiddleware } from '../core/middleware';
import { userSqlController } from './userSql.controller';
import { userSqlService } from './userSql.service';
import { photoProviders } from 'src/providers/photo.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [userSqlController],
  providers: [...photoProviders, userSqlService],
  exports: [userSqlService], // NOw WE CAN USE THIS IN OTHER Module
})
export class userSqlModule {}
