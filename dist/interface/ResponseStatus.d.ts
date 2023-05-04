import { User } from 'src/user-module/interface/user';
export interface StatusDescription {
    statusCode: number;
    statusMessage: string;
}
export interface ResponseWrapper {
    statusDescription: StatusDescription;
    user: User;
    users: User[];
}
