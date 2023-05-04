import { User } from './interface/user';
import { UserDto } from './dto/user.dto';
import { Request, Response } from 'express';
import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
export declare class UserService {
    users: User[];
    getHello(req: Request, res: Response): Response;
    addUser(user: UserDto, req: Request, res: Response): User;
    getUsers(): Promise<ResponseWrapper>;
    deleteUser(email: string): User;
}
