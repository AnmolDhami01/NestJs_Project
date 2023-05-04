import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto } from './dto/user.dto';
import { Request, Response } from 'express';
import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getHello(req: Request, res: Response): Response;
    getUsers(): Promise<ResponseWrapper>;
    addUser(user: UserDto, req: Request, res: Response): User;
    deleteUser(email: string): User;
}
