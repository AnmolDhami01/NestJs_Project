import {
  BadGatewayException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGaurd implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    return this.validateRequest(request, response);
    throw new Error('Method not implemented.');
  }
  public validateRequest(
    request: any,
    response: any,
  ): boolean | Promise<any> | Observable<any> {
    const logger = new Logger(AuthGaurd.name);
    logger.log('In gaurd');
    const token: String = request.headers?.['authorization'];
    if (token?.startsWith('Bearer ')) {
      return Promise.resolve(Boolean);
    } else {
      throw new UnauthorizedException();
    }
  }
}
