import ResponseWrapper from 'src/ResponseWrappers/ResponseWrapper';
import { userSqlService } from './userSql.service';
export declare class userSqlController {
    private readonly userSqlService;
    constructor(userSqlService: userSqlService);
    getAllTask(): Promise<ResponseWrapper>;
    getTaskById(id: number): Promise<ResponseWrapper>;
}
