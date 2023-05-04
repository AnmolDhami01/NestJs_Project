import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './interface/user';
// import {
//   ResponseWrapper,
//   StatusDescription,
// } from 'src/interface/ResponseStatus';
import { UserDto } from './dto/user.dto';
import { Request, Response } from 'express';
import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import StatusDescription from 'src/ResponseWrappers/StatusDescription';
@Injectable()
export class UserService {
  users: User[] = [
    {
      email: 'new',
      username: 'admin',
      password: 'password',
    },
    {
      email: 'shyam',
      username: 'shyam',
      password: 'password',
    },
    {
      email: 'nikhil',
      username: 'nikhil',
      password: 'password',
    },
    {
      email: 'rajesh',
      username: 'rajesh',
      password: 'password',
    },
    {
      email: 'paras',
      username: 'paras',
      password: 'password',
    },
  ];
  getHello(req: Request, res: Response): Response {
    let statusDescription = new StatusDescription();
    statusDescription.setStatusCode(200);
    statusDescription.setStatusMessage('Success');
    return res.status(HttpStatus.OK).json({ statusDescription });
  }
  addUser(user: UserDto, req: Request, res: Response): User {
    // console.log({ req, res });
    if (!user.email && !user.username && !user.password) {
      throw new BadRequestException('Bad request');
    }
    return user;
  }

  //   getUsers(): Promise<ResponseWrapper> {
  //     let statusDescription: StatusDescription = {
  //       statusCode: 200,
  //       statusMessage: 'Success',
  //     };
  //     // throw new BadRequestException('Bad request');
  //     let responseWrapper: ResponseWrapper = {
  //       statusDescription: statusDescription,
  //       user: undefined,
  //       users: this.users,
  //     };
  //     return Promise.resolve(responseWrapper);
  //   }

  getUsers(): Promise<ResponseWrapper> {
    let statusDescription = new StatusDescription();
    let responseWrapper = new ResponseWrapper();
    try {
      responseWrapper.setStatusDescription(statusDescription);
      statusDescription.setStatusCode(200);
      statusDescription.setStatusMessage('Success');
      responseWrapper.setUsers(this.users);
    } catch (error) {
      statusDescription.setStatusCode(500);
      statusDescription.setStatusMessage('Internal Server Error');
      return Promise.resolve(responseWrapper);
    }
    return Promise.resolve(responseWrapper);
  }

  deleteUser(email: string): User {
    let user: User;
    return user;
  }
}
