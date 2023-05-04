import {
  NestInterceptor,
  Injectable,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggerInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // InterceptorsConsumer(context:ExecutionContext,next:CallHandler):Observable<any>
    const logger = new Logger(LoggerInterceptor.name);
    logger.log('Before Request Interceptor...');

    const now = Date.now();

    return next
      .handle()
      .pipe(tap(() => logger.log('After Request Interceptor...')));
  }
}
