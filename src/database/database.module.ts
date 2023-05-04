import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { databaseProviders1 } from './database.providers1';

@Module({
  providers: [...databaseProviders, ...databaseProviders1],
  exports: [...databaseProviders, ...databaseProviders1],
})
export class DatabaseModule {}
